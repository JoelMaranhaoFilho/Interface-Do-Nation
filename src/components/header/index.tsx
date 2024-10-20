import { View, Image, Text, TouchableOpacity } from "react-native";
import { S } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export default function Header(){
    return <View style={S.container}>
        <Image style={S.image} source={{ uri: "https://github.com/JoelMaranhaoFilho.png"}}
        />

        <View style={S.user}>
            <Text style={S.name}>Joel Maranhao</Text>
            <Text style={S.email}>joel.bmpatriota@gmail.com</Text>

        </View>

        <TouchableOpacity>
            <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
        </TouchableOpacity>
    </View>
}