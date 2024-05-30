const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = await getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })