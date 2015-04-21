var env = process.env.NODE_ENV || 'development';

var defaultPort = 5000;

var configuration = {
  development: {
    port: defaultPort,
    cartoDB_USER: "",
    cartoDB_API_KEY: "",
    callbackURL: 'http://localhost:5000/callback',
    default_table: "jp",
    default_screen_name: "anonymous",
    default_profile_image_url: "https://pbs.twimg.com/profile_images/125613612/n5552189986_174811_8055_reasonably_small.jpg"
  },
  production: {
    port: defaultPort,
    cartoDB_USER: "",
    cartoDB_API_KEY: "",
    callbackURL: 'http://localhost:5000/callback',
    default_table: "jp",
    default_screen_name: "anonymous",
    default_profile_image_url: "https://pbs.twimg.com/profile_images/125613612/n5552189986_174811_8055_reasonably_small.jpg"
  }
};

var Config = configuration[env];
module.exports.Config = Config;