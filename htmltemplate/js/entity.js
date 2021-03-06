
const isContextDiagram  = false

// Fields and methods
function itemsString(items) {
  if (items == undefined || items.count <= 0) {
    return "";
  }

  const result = items
    .map(x => {
      // UML private/public is denoted by +/-
      const accessString = x.accessLevel == "public" ? "+" : "-";

      // UML static members and methods should be underlined
      const nameString =
        x.type == "instance" ? x.name : "_" + x.name.replace(/ /g, "_") + "_";

      return accessString + " " + nameString;
    })
    .join("\n");
  return result;
}

// { id: 3, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', x: 40, y: 40 },
function networkLabel(entity) {
  if (entity == undefined) {
    return "Undefined";
  }

  const name = typeof entity.name !== "undefined"
    ? entity.name : entity.extendedEntityName



    if (!isContextDiagram) {
      entityMemberDetails = "\n ----------------- \n" +
      itemsString(entity.properties) +
      "\n ----------------- \n" +
      itemsString(entity.methods)
    } else {
      entityMemberDetails = ""
    }

  return (
    "<b>" +
    name +
    ":</b> <i>" +
    entity.typeString +
    "</i>" + entityMemberDetails
  );
}

// { id: 3, font: { multi: 'html', size: 20 }, label: '<b>This</b> is an\n<i>html</i> <b><i>multi-</i>font</b> <code>label</code>', x: 40, y: 40 },
function networkTitle(entity) {
  if (entity == undefined) {
    return "Undefined";
  }
  const name = typeof entity.name !== "undefined"
    ? entity.name : entity.extendedEntityName
  return (
    "<b>" +
    name +
    ":</b> <i>" +
    entity.typeString 
  );
}

function color(typeString) {
  switch (typeString) {
    case "class":
      return colorClass;
      break;
    case "struct":
      return colorStruct;
      break;
    case "enum":
      return colorEnum;
      break;
    case "protocol":
      return colorProtocol;
      break;
    case "extension":
      return colorExtension;
      break;
    default:
      return colorPinkErrorOccured;
  }
}
