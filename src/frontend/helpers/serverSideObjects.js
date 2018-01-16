if (!process.env.BROWSER) {
    global.window = {
        addEventListener: () => {}
    };
}