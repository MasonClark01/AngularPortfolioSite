const dbinfo = {
    username: "masoncla_masonclark",
    password: "0114MasonSpazzy",
    db: "masoncla_projects",
    host: "s1113.use1.mysecurecloudhost.com"
}

exports.getUser = () => {
    return dbinfo.username
}

exports.getPw = () => {
    return dbinfo.password
}

exports.getDb = () => {
    return dbinfo.db
}
exports.getHost = () => {
    return dbinfo.host
}

exports.dbinfo = dbinfo