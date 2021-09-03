import React, { FunctionComponent } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { QRWebIcon } from "../../assets/qr";
import QRIcon from "../../../assets/icons/qr.svg";

import {
  fontSize,
  color,
  shadow,
  size,
  borderRadius
} from "../../common/styles";

const styles = StyleSheet.create({
  emptyDocumentList: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  callout: {
    width: "80%",
    borderRadius: borderRadius(3),
    //backgroundColor: color("grey", 0), 
    //paddingVertical: size(3),
    
    ...shadow(1)
  },
  calloutText: {
    fontSize: fontSize(2),
    lineHeight: 1.3 * fontSize(2),
    padding: size(3)
  },
  calloutButton: {
    backgroundColor: color("orange", 30),
    flexDirection: "row",
    alignItems: "center",
    height: size(10),
    paddingHorizontal: size(3),
    borderRadius: borderRadius(3),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  calloutButtonText: {
    color: color("grey", 40),
    fontWeight: "bold",
    marginLeft: size(1.5)
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});
const image = { uri: "https://reactjs.org/logo-og.png" };
interface EmptyDocumentList {
  onAdd: () => void;
}
export const EmptyDocumentList: FunctionComponent<EmptyDocumentList> = ({
  onAdd
}) => (
  <View testID="empty-document-list" style={styles.emptyDocumentList}>

    <Image source={require('../../assets/new_bg.png')} style={styles.image}>
    </Image>
    
    <View style={styles.callout}>

      <TouchableOpacity
        testID="scanner-button"
        style={styles.calloutButton}
        onPress={onAdd}
      >
        {Platform.OS === "web" ? (
          <QRWebIcon width={20} height={20} fill={color("grey", 40)} />
        ) : (
          <QRIcon width={20} height={20} fill={color("grey", 40)} />
        )}
        <Text style={styles.calloutButtonText}>Scan to add licence</Text>
      </TouchableOpacity>
    </View>
  </View>
);
