const tagName = 'pc-icon'
const iconTemplate = `
<div id="$id" class="icon">
    <img src="$src">
    <div class='icon-text'>$name</div>
</div>
`

function openFrame(targetFrame, icon) {
    targetFrame.show()
}

function closeFrame(targetFrame, icon) {
    targetFrame.hide()
}

function initializeIcons() {
    document.createElement(tagName)
    const tagInstances = document.getElementsByTagName(tagName)
    while (tagInstances.length > 0) {
        let element = tagInstances[0]
        const target = element.attributes.target.value
        const src = element.attributes.src.value
        const name = element.getAttribute('name') || target
        const id = `${target}-icon`
        element.outerHTML = iconTemplate
            .replaceAll('$id', id)
            .replaceAll('$src', src)
            .replaceAll('$name', name)

        const icon = document.getElementById(id);

        const targetFrame = document.getElementById(target);

        ['hide-frame', 'show-frame'].forEach((eventName) => {
            targetFrame.addEventListener(eventName, (e) => {
                icon.classList.toggle('icon-opened', targetFrame.visible)
            })
        })

        icon.onclick = () => {
            targetFrame.toggle();
        }
    }
}

function main() {
    initializeIcons()
}

main()


