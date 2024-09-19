import { db } from "~/server/db"

const mockImageUrls = [
  'https://utfs.io/f/BJdmT4fcgRnAJXwBujvUTJhcApFeLPq3CMlowKHt5ND6yQIB',
  'https://utfs.io/f/BJdmT4fcgRnAqOacM6oD46NpC8MySQ0rv1UtVIizGHYmRW5k',
  'https://utfs.io/f/BJdmT4fcgRnAB0Jvk8fcgRnAZFsPMXeiyTdQm1hSrwWNDJuz'
]

const mockImages = mockImageUrls.map((url, index)=> {
  return {
    id : index + 1,
    url : url
  }
})
export default async function  HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id} className="w-48">
              {post.name}
            </div>
          ))
        }
        {
          [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} /> 
            </div>
          ))
        }
      </div>
    </main>
  );
}
