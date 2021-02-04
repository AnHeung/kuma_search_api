const GoogleSearch = require('../model/googleSearch')
const MalSearchItem = require('../model/MalSearchItem')
const MalSearchDetailItem = require('../model/MalSearchDetailItem')
const MalSearchDetailSimpleItem = require('../model/MalSearchDetailSimpleItem')
const MalSearchRankingItem = require('../model/MalSearchRankingItem')

const googleSearchParsing = (searchObj, limit) => {
    const searchItems = searchObj['items']
    if (searchItems) {
        return searchItems.filter(({ title, link, pagemap }) => {
            const page = pagemap || {}
            const cse_image = page && page['cse_image']
            const metatags = page && page['metatags']
            return title && link && (cse_image || metatags)
        })
            .map(({ title, link, pagemap }) => {
                const page = pagemap || {}
                const image = page['cse_image'] && page['cse_image'].length > 0 ? page['cse_image'][0].src : ''
                const meta_image = page['metatags'] && page['metatags'].length > 0 ? page['metatags'][0]["og:image"] : ''
                return new GoogleSearch(title, link, image || meta_image)
            })
            .splice(0, limit || 1)
    } else {
        console.log('검색된 아이템이 없습니다.')
        return false
    }
}

const malSearchParsing = (malItems) => {
    try {
        return malItems.map(({ node: { id, title, main_picture: { medium } } }) => new MalSearchItem(id, title, medium))
    } catch (e) {
        console.error(`malSearchParsing err: ${e}`)
        return false
    }
}

const malSearchRankingParsing = (malItems, type) => {
    try {
        return {
            type: type,
            data: malItems.map(({ node: { id, title, main_picture: { medium } }, ranking: { rank } }) => {
                return new MalSearchRankingItem(id, title, medium, rank)
            })
        }
    } catch (e) {
        console.error(`malSearchParsing err: ${e}`)
        return []
    }
}

const malSearchDetailParsing = (searchDetailItem, type) => {
    try {
        if (searchDetailItem) {
            const { id, title, main_picture: { medium }, start_date, end_date
                , status, genres, num_episodes, start_season, related_anime } = searchDetailItem

            if (type === 'all') {
                const genresName = genres.reduce((acc, { name }) => {
                    if (!acc) acc = name
                    else acc += `|${name}`
                    return acc
                }, '')
                const relatedAnimeArr = related_anime.map(({ node: { id, title, main_picture: { medium } } }) => {
                    return new MalSearchItem(id, title, medium)
                })
                return new MalSearchDetailItem(id, title, medium, start_date, end_date, status, genresName, num_episodes, start_season.year, relatedAnimeArr)
            }
            return new MalSearchDetailSimpleItem(id, title, medium, start_date)
        } else {
            console.log('검색된 아이템이 없습니다.')
            return false
        }
    } catch (err) {
        console.log(`malSearchDetailParsing err :${err}`)
        return false
    }
}


module.exports = {
    googleSearchParsing: googleSearchParsing,
    malSearchParsing: malSearchParsing,
    malSearchDetailParsing: malSearchDetailParsing,
    malSearchRankingParsing: malSearchRankingParsing
}