export const gameConfig = {}
export const systemInfo = {}
var antiAliasingRatio = 1
systemInfo.SCREEN_WIDTH = wx.getSystemInfoSync().windowWidth
systemInfo.SCREEN_HEIGHT = wx.getSystemInfoSync().screenHeight
systemInfo.PIXEL_RATIO = wx.getSystemInfoSync().pixelRatio * antiAliasingRatio

systemInfo.canvas = wx.createCanvas();

systemInfo.canvas.height = systemInfo.SCREEN_HEIGHT * systemInfo.PIXEL_RATIO
systemInfo.canvas.width = systemInfo.SCREEN_WIDTH * systemInfo.PIXEL_RATIO

systemInfo.SCREEN_HEIGHT = systemInfo.canvas.height
systemInfo.SCREEN_WIDTH = systemInfo.canvas.width

gameConfig.PADDING_TOP = 60 * systemInfo.PIXEL_RATIO
gameConfig.PADDING_BOTTOM = 30 * systemInfo.PIXEL_RATIO
gameConfig.PADDING_LEFT = 30 * systemInfo.PIXEL_RATIO
gameConfig.PADDING_RIGHT = 60 * systemInfo.PIXEL_RATIO

gameConfig.COLUMNS = 15

gameConfig.ELEMENT_WIDTH = Math.floor((systemInfo.SCREEN_WIDTH - gameConfig.PADDING_LEFT - gameConfig.PADDING_RIGHT) / gameConfig.COLUMNS)
gameConfig.ELEMENT_HEIGHT = gameConfig.ELEMENT_WIDTH

gameConfig.ROWS = Math.floor((systemInfo.SCREEN_HEIGHT - gameConfig.PADDING_TOP - gameConfig.PADDING_BOTTOM) / gameConfig.ELEMENT_HEIGHT)

gameConfig.GRID_WIDTH = gameConfig.COLUMNS * gameConfig.ELEMENT_WIDTH
gameConfig.GRID_HEIGHT = gameConfig.ROWS * gameConfig.ELEMENT_HEIGHT

gameConfig.PADDING_TOP = systemInfo.SCREEN_HEIGHT - gameConfig.GRID_HEIGHT - gameConfig.PADDING_BOTTOM
gameConfig.PADDING_RIGHT = systemInfo.SCREEN_WIDTH - gameConfig.GRID_WIDTH - gameConfig.PADDING_LEFT