var welcomeMsgs = [
    "Hope you're having a great day!", "It's a beautiful day, isn't it?"
];

module.exports = {
    getWelcomeMsg: function(args, callback) {
        callback(null, {
            welcomeMsg: welcomeMsgs[0]
        });
    }
};