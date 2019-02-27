function depthFirstSearch(rootNode, verts, eds) {
  let s = []
  let visited = [rootNode]
  s.push(rootNode)

  while (s.length > 0) {
  let v = s.pop()
    if (v.discovered === null) {
      v.discovered = true

      findAdjacent(v.name, verts, eds).forEach(x => {
        visited.push(x)
        s.push(x)
      })
    }
  }
  return visited
}


function findAdjacent(node, verts, eds) {
  return eds.filter(x => x.includes(node)).map(x => x.filter(y => y != node)[0]).map(x => findNode(x, verts)).filter(x => !x.discovered)
}

function findNode(node, verts) {
  return verts.find(x => x.name === node)
}
