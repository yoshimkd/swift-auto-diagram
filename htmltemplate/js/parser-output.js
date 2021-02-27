var entities = [{
  "id": 1,
  "typeString": "class",
  "properties": [
    {
  "name": "var isSendingPhoto",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let db",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var reference: CollectionReference?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let storage",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var messages: [Message]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var messageListener: ListenerRegistration?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let user: User",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let channel: Channel deinit",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cameraButtonPressed()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "save(_ message: Message)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "insertNewMessage(_ message: Message)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleDocumentChange(_ change: DocumentChange)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "uploadImage(_ image: UIImage, to channel: Channel, completion: @escaping (URL?) -> Void)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "sendPhoto(_ image: UIImage)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "downloadImage(at url: URL, completion: @escaping (UIImage?) -> Void)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(user: User, channel: Channel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ChatViewController",
  "superClass": 26,
  "extensions": [
    2,
    3,
    4,
    5,
    6
  ]
},{
  "id": 7,
  "typeString": "class",
  "properties": [
    {
  "name": "let toolbarLabel: UILabel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let channelCellIdentifier",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var currentChannelAlertController: UIAlertController?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let db",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var channelReference: CollectionReference",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var channels",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var channelListener: ListenerRegistration?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let currentUser: User deinit",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "signOut()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "addButtonPressed()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "textFieldDidChange(_ field: UITextField)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "createChannel()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "addChannelToTable(_ channel: Channel)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "updateChannelInTable(_ channel: Channel)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "removeChannelFromTable(_ channel: Channel)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "handleDocumentChange(_ change: DocumentChange)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(currentUser: User)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ChannelsViewController",
  "superClass": 27,
  "extensions": [
    8
  ]
},{
  "id": 9,
  "typeString": "class",
  "properties": [
    {
  "name": "var actionButton: UIButton!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fieldBackingView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var displayNameField: UITextField!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var actionButtonBackingView: UIView!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var bottomConstraint: NSLayoutConstraint! override",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var preferredStatusBarStyle: UIStatusBarStyle",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "actionButtonPressed()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "textFieldDidReturn()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "registerForKeyboardNotifications()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "signIn()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "showMissingNameAlert()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "keyboardWillShow(_ notification: Notification)",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "keyboardWillHide(_ notification: Notification)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "LoginViewController",
  "superClass": 28
},{
  "id": 10,
  "typeString": "class",
  "properties": [
    {
  "name": "var shouldAutorotate: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var supportedInterfaceOrientations: UIInterfaceOrientationMask",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var preferredStatusBarStyle: UIStatusBarStyle",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(_ rootVC: UIViewController)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder aDecoder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "NavigationController",
  "superClass": 29
},{
  "id": 11,
  "typeString": "struct",
  "properties": [
    {
  "name": "let id: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let content: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sentDate: Date",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let sender: Sender",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var data: MessageData",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let image",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var messageId: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var image: UIImage?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var downloadURL: URL?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(user: User, content: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(user: User, image: UIImage)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(document: QueryDocumentSnapshot)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Message",
  "superClass": 30,
  "extensions": [
    12,
    13
  ]
},{
  "id": 14,
  "typeString": "struct",
  "properties": [
    {
  "name": "let id: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let name: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(name: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(document: QueryDocumentSnapshot)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Channel",
  "extensions": [
    15,
    16
  ]
},{
  "id": 17,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var representation: [String: Any]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "DatabaseRepresentation"
},{
  "id": 22,
  "typeString": "enum",
  "cases": [
    {
  "name": "displayName"
}
  ],
  "name": "SettingKey",
  "superClass": 31
},{
  "id": 23,
  "typeString": "class",
  "properties": [
    {
  "name": "var displayName: String!",
  "type": "type",
  "accessLevel": "private"
},
    {
  "name": "let defaults",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let key",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let name",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppSettings",
  "containedEntities": [
    22
  ]
},{
  "id": 24,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var window: UIWindow!",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var rootViewController: UIViewController?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let vc",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "show(in window: UIWindow?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "handleAppState()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "userStateDidChange()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "AppController"
},{
  "id": 25,
  "typeString": "class",
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    33
  ],
  "name": "AppDelegate",
  "superClass": 32
},{
  "id": 26,
  "typeString": "class",
  "name": "MessagesViewController"
},{
  "id": 27,
  "typeString": "class",
  "name": "UITableViewController"
},{
  "id": 28,
  "typeString": "class",
  "name": "UIViewController"
},{
  "id": 29,
  "typeString": "class",
  "name": "UINavigationController"
},{
  "id": 30,
  "typeString": "class",
  "name": "MessageType"
},{
  "id": 31,
  "typeString": "class",
  "name": "String"
},{
  "id": 32,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 33,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 34,
  "typeString": "protocol",
  "name": "MessagesDisplayDelegate"
},{
  "id": 35,
  "typeString": "protocol",
  "name": "MessagesLayoutDelegate"
},{
  "id": 36,
  "typeString": "protocol",
  "name": "MessagesDataSource"
},{
  "id": 37,
  "typeString": "protocol",
  "name": "MessageInputBarDelegate"
},{
  "id": 38,
  "typeString": "protocol",
  "name": "UIImagePickerControllerDelegate"
},{
  "id": 39,
  "typeString": "protocol",
  "name": "UINavigationControllerDelegate"
},{
  "id": 40,
  "typeString": "protocol",
  "name": "Comparable"
},{
  "id": 41,
  "typeString": "class",
  "name": "UIImage",
  "extensions": [
    18
  ]
},{
  "id": 42,
  "typeString": "class",
  "name": "UIView",
  "extensions": [
    19
  ]
},{
  "id": 43,
  "typeString": "class",
  "name": "UIColor",
  "extensions": [
    20
  ]
},{
  "id": 44,
  "typeString": "class",
  "name": "UIScrollView",
  "extensions": [
    21
  ]
},{
  "id": 2,
  "typeString": "extension",
  "methods": [
    {
  "name": "backgroundColor(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "shouldDisplayHeader(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "messageStyle(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> MessageStyle",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    34
  ],
  "extendedEntityName": "ChatViewController"
},{
  "id": 3,
  "typeString": "extension",
  "methods": [
    {
  "name": "avatarSize(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> CGSize",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "footerViewSize(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> CGSize",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "heightForLocation(message: MessageType, at indexPath: IndexPath, with maxWidth: CGFloat, in messagesCollectionView: MessagesCollectionView) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    35
  ],
  "extendedEntityName": "ChatViewController"
},{
  "id": 4,
  "typeString": "extension",
  "methods": [
    {
  "name": "currentSender() -> Sender",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "numberOfMessages(in messagesCollectionView: MessagesCollectionView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "messageForItem(at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> MessageType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "cellTopLabelAttributedText(for message: MessageType, at indexPath: IndexPath) -> NSAttributedString?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    36
  ],
  "extendedEntityName": "ChatViewController"
},{
  "id": 5,
  "typeString": "extension",
  "methods": [
    {
  "name": "messageInputBar(_ inputBar: MessageInputBar, didPressSendButtonWith text: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    37
  ],
  "extendedEntityName": "ChatViewController"
},{
  "id": 6,
  "typeString": "extension",
  "methods": [
    {
  "name": "imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any])",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "imagePickerControllerDidCancel(_ picker: UIImagePickerController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    38,
    39
  ],
  "extendedEntityName": "ChatViewController"
},{
  "id": 8,
  "typeString": "extension",
  "methods": [
    {
  "name": "numberOfSections(in tableView: UITableView) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ChannelsViewController"
},{
  "id": 12,
  "typeString": "extension",
  "properties": [
    {
  "name": "var representation: [String : Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rep: [String : Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let url",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    17
  ],
  "extendedEntityName": "Message"
},{
  "id": 13,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Message, rhs: Message) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Message, rhs: Message) -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    40
  ],
  "extendedEntityName": "Message"
},{
  "id": 15,
  "typeString": "extension",
  "properties": [
    {
  "name": "var representation: [String : Any]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rep",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let id",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    17
  ],
  "extendedEntityName": "Channel"
},{
  "id": 16,
  "typeString": "extension",
  "methods": [
    {
  "name": "== (lhs: Channel, rhs: Channel) -> Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "< (lhs: Channel, rhs: Channel) -> Bool",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    40
  ],
  "extendedEntityName": "Channel"
},{
  "id": 18,
  "typeString": "extension",
  "properties": [
    {
  "name": "var scaledToSafeUploadSize: UIImage?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let maxImageSideLength: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let largerSide: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let ratioScale: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let newImageSize",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "image(scaledTo size: CGSize) -> UIImage?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIImage"
},{
  "id": 19,
  "typeString": "extension",
  "methods": [
    {
  "name": "smoothRoundCorners(to radius: CGFloat)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIView"
},{
  "id": 20,
  "typeString": "extension",
  "properties": [
    {
  "name": "var primary: UIColor",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var incomingMessage: UIColor",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIColor"
},{
  "id": 21,
  "typeString": "extension",
  "properties": [
    {
  "name": "var isAtBottom: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var verticalOffsetForBottom: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scrollViewHeight",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scrollContentSizeHeight",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let bottomInset",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let scrollViewBottomOffset",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIScrollView"
}] 