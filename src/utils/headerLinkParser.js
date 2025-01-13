function headerLinkParser(headerLink) {
    let links = []
    let linksArray = headerLink.split(",")
    linksArray.forEach(element => {
        let newLink = {
            link: element.match(/[^<][^>]*/)[0],
            rel: element.match(/"(\w+)"/)[1],
            page: element.match(/page=(\d+)/)[1]
        }
        links.push(newLink)
    });

    return links;
    
}

export default headerLinkParser