import { StyleSheet } from "react-native";

export const SearchStyle = StyleSheet.create({
    container: {
        marginTop: 20,
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
        backgroundColor: '#f7f7f7',
        borderRadius: 10
    },
    searchIcon: {
        padding: 5
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#f7f7f7',
        color: '#424242',
        borderRadius: 10
    },
});
