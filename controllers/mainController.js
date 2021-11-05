var controllers = {
    index: (req, res) => {
        return res.render('index');

    },

    more: (req, res) => {
        return res.render('more');
    },

    search: (req, res) => {
        return res.render('search');
    },
}

module.exports = controllers;