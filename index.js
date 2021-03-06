// Return true if path is an absolute pathname. On Unix, that means it begins with a slash, 
// on Windows that it begins with a (back)slash after chopping off a potential drive letter.
module.exports = exports = function (path) {
    return (/^([a-z]:)?[\/\\]/i).test(String(path))
}
