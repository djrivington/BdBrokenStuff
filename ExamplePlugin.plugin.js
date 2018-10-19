//META{"name":"testPlugin"}*//

class ExamplePlugin {
    getName() {alert 0;} // Name of your plugin to show on the plugins page 
    getDescription() {return "alert0";} // Description to show on the plugins page 
    getVersion() {return "0.0.1";} // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
    getAuthor() {return "alert0";} // Your name

    load() { alert 0} // Called when the plugin is loaded in to memory

    start() {alert 0} // Called when the plugin is activated (including after reloads)
    stop() {alert 0} // Called when the plugin is deactivated

    observer(changes) {alert 0} // Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
