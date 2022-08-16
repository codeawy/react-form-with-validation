import Alert from "components/Alert";
import FormInput from "components/FormInput";
import FormInputErrorMsg from "components/FormInputErrMsg";
import FormSubmitBtn from "components/FormSubmitBtn";
import Post from "components/Post";
import { useState } from "react";
import { formInputs } from "utils/formInputs";
import { postDataValidation } from "validation/postSchema";

const App = () => {
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });
  const [errors, setErrors] = useState({ ...post });
  const [isError, setIsError] = useState(false);

  // ** Renders
  const renderPostList = () => {
    return (
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {postList.map(post => (
          <Post key={post.id} {...post} postList={postList} setPostList={setPostList} />
        ))}
      </div>
    );
  };

  const POSTS_LENGTH = postList.length ? (
    renderPostList()
  ) : (
    <Alert type="warning" msg="Alert: Change a few things up and try submitting again." />
  );

  // ** Handlers
  const changeHandler = e => {
    const {
      target: { value, name },
    } = e;

    setPost({ ...post, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (!Object.keys(postDataValidation(post)).length) {
      setIsError(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    setErrors(postDataValidation(post));
    if (Object.keys(postDataValidation(post)).length) {
      setIsError(true);
      return;
    }

    setPostList(prev => [...prev, { ...post, id: postList.length + 1 }]);
    setPost({
      title: "",
      description: "",
      image: "",
      creator: "",
      email: "",
    });

    setIsError(false);
  };

  const renderFormInputs = () => {
    return (
      <>
        {formInputs.map(({ name, label, type }, idx) => (
          <div key={idx}>
            <FormInput
              label={label}
              name={name}
              type={type}
              id={label}
              value={post[name]}
              onChange={changeHandler}
            />
            <FormInputErrorMsg errors={errors} name={name} />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container">
      <h1 className="bg-primary text-3xl  text-white my-16 text-center w-fit mx-auto p-3 rounded-md">
        Simple Form Validation
      </h1>

      <div className="flex flex-col-reverse justify-between lg:flex-row gap-10">
        {POSTS_LENGTH}

        <form className="w-full lg:w-2/6" onSubmit={submitHandler}>
          {renderFormInputs()}
          <FormSubmitBtn isError={isError} />
        </form>
      </div>
    </div>
  );
};

export default App;
