import * as React from "react";
import ResourceLoader from "~components/resource-loader";
import UserInfo from "~components/user-info";
import PostInfo from "~components/post-info";
import "./global.css";
import RenderComponent from "~components/render-component";

const resourceFetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const userFetchFunction = async () =>
  resourceFetcher("https://jsonplaceholder.typicode.com/users");
const postFetchFunction = async () =>
  resourceFetcher("https://jsonplaceholder.typicode.com/posts");

export default () => (
  <>
    <ResourceLoader fetchFunction={userFetchFunction} resourceName="users">
      <UserInfo />
    </ResourceLoader>

    {/* <ResourceLoader fetchFunction={postFetchFunction} resourceName="posts">
      <PostInfo />
    </ResourceLoader> */}
    <RenderComponent
      fetcherFunction={postFetchFunction}
      renderComponent={(data: any) => <PostInfo posts={data} />}
    />
  </>
);
