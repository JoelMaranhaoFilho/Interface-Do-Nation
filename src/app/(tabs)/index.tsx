import {View, ScrollView, ScrollViewBase} from "react-native"
import { DATA } from "@/utils/data"
import Header from "@/components/header"
import PageList from "@/components/page_list"
import RecentList from "@/components/recent-list"

export default function Index(){
    return (
    
    <View style={ {flex: 1, paddingTop: 32 }}>
        <Header />

        <ScrollView 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop: 24,
            paddingBottom: 100
        }}
        
        >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
        </ScrollView>
    </View>
    )
}