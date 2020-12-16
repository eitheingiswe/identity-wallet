import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { getStatusProps } from "../utils";
import { CheckStatus } from "../constants";
import { size } from "../../../common/styles";

interface ValidityBannerContent {
  isConnected: boolean;
  checkStatus?: CheckStatus;
  isExpanded?: boolean;
}

export const ValidityBannerContent: FunctionComponent<ValidityBannerContent> = ({
  isConnected,
  checkStatus = CheckStatus.CHECKING,
  isExpanded = false,
  children,
}) => {
  const { backgroundColor } = getStatusProps(
    isConnected ? checkStatus : CheckStatus.CHECKING
  );

  return isExpanded ? (
    <View
      style={{
        paddingHorizontal: size(3),
        backgroundColor,
      }}
      testID="validity-banner-content"
    >
      <View style={{ paddingTop: size(1), paddingBottom: size(1.5) }}>
        {children}
      </View>
    </View>
  ) : null;
};