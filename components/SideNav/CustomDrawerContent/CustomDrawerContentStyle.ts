import { StyleSheet } from "react-native";

export const CustomDrawerContentStyle = StyleSheet.create({
    DrawerContentScrollView: {
        paddingTop: 0,
        flex: 1
    },
    container: {
        padding: 0
    },
    firstSectionContainer: {
        // backgroundColor: "#5F6F52",
        flexBasis: 170
    },
    firstSection: {
        marginTop: 20,
        flex: 1
    },
    firstSectionContainer1: {
        flexBasis: 100,
        justifyContent: "center"
    },
    firstSectionContainer1ContentContainer: {
        height: 40,
        width: 40,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    firstSectionContainer1Content: {
        fontSize: 20,
        fontWeight: "700", color: "#5F6F52"
    },
    firstSectionContainer2: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    firstSectionContainer2Content: {
        marginLeft: 10, 
        fontSize: 14,
        fontWeight: "500", 
        color: "white",
        marginBottom: 3
    },
    secondSectionContainer: {
        // marginTop: 5, 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderColor: "#e0e0e0"
    },
    wrappedDrawerItem: {
        marginLeft: 0, 
        marginRight: 0, 
        marginTop: 0
    },
    wrappedDrawerItemLabelStyle: {
        marginLeft: 2, 
        color:"#000000", 
        fontSize: 13, 
        fontWeight: "400"
    }
});