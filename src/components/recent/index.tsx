import { View, TouchableOpacity, Image, Text} from "react-native";
import { S } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
    data: {
        title: string
        cover?: string
    }
}

export default function Recent({data}: Props){
    return <TouchableOpacity style={S.container}>
        <Image style={S.cover} source={{uri: data.cover}} />
        
        <View style={S.content}>

        <Feather 
        name="file-text" 
        size={32} 
        color={colors.gray[300]} 
        style={S.icon}
        />
        <Text style={S.title} numberOfLines={2}>
            {data.title}
        </Text>
        </View>

    </TouchableOpacity>
}