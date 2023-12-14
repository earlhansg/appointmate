import { StyleSheet } from "react-native";

export const SearchStyle = StyleSheet.create({
    container: {
        marginTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: "row",
        gap: 10
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
    searchIcon: {
        padding: 5
    },
    input: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#f7f7f7',
        color: '#424242',
    },
    filterContainer: {
        justifyContent: "center"
    }
});
