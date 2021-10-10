var controllers = {
    index: (req, res) => {
        return res.render('index');

    },

    more: (req, res) => {
        return res.render('more');
    },
}

module.exports = controllers;