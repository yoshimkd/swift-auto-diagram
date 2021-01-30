
//let userConfigs = {
//Highlevel context diagram with only Entities/Classes. Class properties, methods not drawn
const isContextDiagram = false;
//deClutter the diagram
//Entities starting with UI also ignored in the code
let ignoreEntities = ["String", "Int", "Double", "Float", "Bool", "CGPoint", "CGSize",
"NSObject", "AnyObject", "Error", "Date",
"class","Codable", "DeCodable", "Encodable", "Equatable","CodingKeys"];
//}

export { isContextDiagram }
//export { ignoreEntities }