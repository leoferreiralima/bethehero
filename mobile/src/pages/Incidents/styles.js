import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20,
  },
  headerText: {
    fontSize: 15,
    color: "#737380",
  },
  headerTextBold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 30,
    color: "#13131a",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },
  incidentList: {
    flex: 1,
    marginTop: 28,
  },
  incident: {
    position: "relative",
    marginHorizontal: 10,
    padding: 18,
    borderRadius: 8,
    backgroundColor: "#F5f5f0",
    marginTop: 6,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    zIndex: 5,
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "700",
  },
});
