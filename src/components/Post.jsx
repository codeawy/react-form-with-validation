import CloseIcon from "./svg/CloseIcon";

const Post = ({
  id,
  title = "",
  description = "",
  image = "",
  creator = "",
  email = "",
  postList = [],
  setPostList = () => {},
}) => {
  // ** Handlers
  const removePostHandler = () => {
    const arr = [...postList];
    const filterById = arr.filter(p => p.id !== id);
    setPostList(filterById);
  };

  return (
    <div className="border-2 border-primary rounded-lg flex flex-col justify-content h-fit overflow-hidden relative">
      <div className="post-header">
        <img src={image} alt="img" className="h-52 w-full lg:object-cover" />
      </div>
      <div className="p-2 text-sm mt-3">
        <h3>
          <span className="font-bold mr-1">ID: </span>
          {id}
        </h3>
        <h3>
          <span className="font-bold mr-1">Title: </span>
          {title}
        </h3>
        <p>
          <span className="font-bold mr-1">Description:</span>
          {description}
        </p>
        <h3>
          <span className="font-bold mr-1">Created By:</span>
          {creator}
        </h3>
        <h3>
          <span className="font-bold mr-1">Email:</span>
          {email}
        </h3>
        <span
          className=" absolute top-3 right-3 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer"
          onClick={removePostHandler}
        >
          <CloseIcon />
        </span>
      </div>
    </div>
  );
};

export default Post;
