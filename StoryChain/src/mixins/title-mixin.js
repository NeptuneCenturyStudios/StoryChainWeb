
function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return (typeof title === 'function'
            ? title.call(vm)
            : title)
            + ` - ${vm.$store.state.appName}`;
    }
}

export default {
    created() {
        const title = getTitle(this)
        if (title) {
            document.title = title
        }
    }
}