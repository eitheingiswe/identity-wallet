import React, { FunctionComponent } from "react";
import { ScrollView,Image,View,Dimensions } from "react-native";
import { DocumentListItem } from "./DocumentListItem";
import { size } from "../../common/styles";
import { VerifierTypes } from "../../types";

export interface DocumentItem {
  id: string;
  title: string;
  isVerified?: boolean;
  lastVerification?: number;
  issuedBy?: string;
  verifierType: VerifierTypes;
}

export interface DocumentList {
  documents: DocumentItem[];
  navigateToDoc: (documentId: string, verifierType: VerifierTypes) => void;
}

export const DocumentList: FunctionComponent<DocumentList> = ({
  documents,
  navigateToDoc
}) => {
  const renderedDocumentListItem = documents.map(doc => (
    <DocumentListItem
      key={doc.id}
      title={doc.title}
      isVerified={doc.isVerified}
      lastVerification={doc.lastVerification}
      issuedBy={doc.issuedBy}
      onPress={(): void => navigateToDoc(doc.id, doc.verifierType)}
      verifierType={doc.verifierType}
    />
  ));
  return (
    <View>
      <Image style={{ height: "100%", width: "100%", position: 'absolute', bottom:0, left:0 }} source={require('../../assets/list_bg.jpeg')} />
        
      <ScrollView
        testID="document-list"
        style={{
          width: "100%",
          paddingVertical: size(4),
          paddingHorizontal: size(3),
          height: "100%",
        }}
      >
        {renderedDocumentListItem}
      </ScrollView>
    </View>
  );
};
