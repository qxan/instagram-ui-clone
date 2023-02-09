import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Post from "../../components/shared/Post";
import posts from "../../data/posts";

function Divider() {
    return (
        <View style={{height: 0.5, backgroundColor: '#DADADA'}} />
    )
}

function Home() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        <Stories />
        <Divider />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
