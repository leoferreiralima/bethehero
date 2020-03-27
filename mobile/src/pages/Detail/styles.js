import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 20,
  },
  incident: {
    position: "relative",
    padding: 18,
    borderRadius: 8,
    backgroundColor: "#F5f5f0",
    marginTop: 24,
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
    marginTop: 24,
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
  },
  contactBox: {
    position: "relative",
    padding: 18,
    borderRadius: 8,
    backgroundColor: "#F5f5f0",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    zIndex: 5,
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30,
  },
  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#F5f5f0",
    fontSize: 15,
    fontWeight: "bold",
  },
});
