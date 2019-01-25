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
        x.type == "instance" ? x.name : x.name.replace(/ /g, "_");

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

  return (
    "<b>" +
    entity.name +
    ":</b><i>" +
    entity.typeString +
    "</i>" +
    "\n ----------------- \n" +
    itemsString(entity.properties) +
    "\n ----------------- \n" +
    itemsString(entity.methods)
  );
}

function color(typeString) {
  switch (typeString) {
    case "class":
      return colorLightBlue;
      break;
    case "struct":
      return colorLightOrange;
      break;
    case "enum":
      return colorLightYellow;
      break;
    case "protocol":
      return colorLightGreen;
      break;
    case "extension":
      return colorLightGreenExtension;
      break;
    default:
      return colorPinkErrorOccured;
  }
}
