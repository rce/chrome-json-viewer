function main() {
  const e = findElementThatLooksLikeChromeDefaultJsonView()
  if (!e) return

  const [err, json] = tryToParseJson(e.textContent)
  if (!err) {
    e.textContent = prettyPrint(json)
  }
}

function tryToParseJson(str) {
  try {
    return [undefined, JSON.parse(str)]
  } catch (err) {
    return [err, undefined]
  }
}

function prettyPrint(json) {
  return JSON.stringify(json, null, 2)
}

function findElementThatLooksLikeChromeDefaultJsonView() {
  const bodyChildren = document.body.childNodes
  if (bodyChildren.length !== 1)
    return
  const child = bodyChildren[0]
  if (child.nodeName === "PRE")
    return child
}

document.addEventListener("DOMContentLoaded", main)
