import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { VerifiedLabel } from "./VerifiedLabel";
import { color, fontSize, size, borderRadius } from "../../common/styles";
import { Feather } from "@expo/vector-icons";
import { VerifierTypes } from "../../types";

const styles = StyleSheet.create({
  documentListItem: {
    minHeight: 152,
    borderRadius: borderRadius(3),
    marginBottom: size(2),
    backgroundColor: color("grey", 10),
    borderColor: color("grey", 30),
    borderWidth: 1,
  },
  documentTitle: {
    color: "#20335F",
    fontWeight: "bold",
    fontSize: fontSize(1),
    textAlign: "center",
    top: 5,
    
  },
  verifiedLabelWrapper: {
    position: "absolute",
    top: 5,
    right: 0,
    marginRight: size(2),
    marginTop: size(5)
  },
  licenceNoLabelWrapper: {
    position: "absolute",
    bottom: 0,
    right: 1,
    fontWeight: "bold",
    margin: size(0.5)
  },
  backgroundImage: {
    flex: 1,
    height: 152,
    backgroundColor: "black",
    margin: 7.5,
    justifyContent: "center",
    alignItems: "center"
  },
});

export interface DocumentListItem {
  title: string;
  isVerified?: boolean;
  lastVerification?: number;
  issuedBy?: string;
  onPress: () => void;
  verifierType?: VerifierTypes;
}

export const DocumentListItem: FunctionComponent<DocumentListItem> = ({
  title,
  isVerified,
  onPress,
  lastVerification
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.documentListItem}
    testID="document-list-item"
  > 
  <Image style={{ 
                  height: "100%", 
                  width: "100%", 
                  position: 'absolute', 
                  top:0, 
                  left:0, 
                  minHeight: 150, 
                  minWidth: 364,
                  borderRadius: borderRadius(3),
                }} 
                source={require('../../assets/item_bg.png')} />
    {<Text style={styles.documentTitle}>Unmanned Aircraft Pilot Licence</Text>}
    {!isVerified && (
      <View style={styles.verifiedLabelWrapper}>
        <VerifiedLabel
          isVerified={isVerified}
          lastVerification={lastVerification}
        />
      </View>
    )}
    {title && <Text style={styles.licenceNoLabelWrapper}>{title}</Text>}
  </TouchableOpacity>
);
