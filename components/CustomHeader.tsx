// @ts-ignore
import {useSafeAreaInsets} from "react-native-safe-area-context";
// @ts-ignore
import {TextInput, TouchableOpacity, View,StyleSheet,Text} from "react-native";
// @ts-ignore
import Colors from "@/constants/Colors";
// @ts-ignore
import {Ionicons} from "@expo/vector-icons";
// @ts-ignore
import {Link} from "expo-router";

// @ts-ignore
const CustomHeader = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View  style={{ paddingTop: top }}>
            <View
                style={[
                    cusstyles.container,
                    {
                        height: 60,
                        gap: 10,
                        paddingHorizontal: 20,
                        backgroundColor: 'transparent',
                    },
                ]}>
                <Link href={"/"} asChild>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: Colors.gray,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>SG</Text>
                    </TouchableOpacity>
                </Link>
                <View style={cusstyles.searchSection}>
                    <Ionicons style={cusstyles.searchIcon} name="search" size={20} color={Colors.dark} />
                    <TextInput style={cusstyles.input} placeholder="Search" placeholderTextColor={Colors.dark} />
                </View>
                <View style={cusstyles.circle}>
                    <Ionicons name={'stats-chart'} size={20} color={Colors.dark} />
                </View>
                <View style={cusstyles.circle}>
                    <Ionicons name={'card'} size={20} color={Colors.dark} />
                </View>
            </View>
        </View>
    );
};

const cusstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: Colors.gray,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        borderRadius: 30,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: Colors.lightGray,
        color: Colors.dark,
        borderRadius: 30,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
// @ts-ignore
export default CustomHeader;