import TabsList from "./components/TabsList";
import { useDispatch } from "react-redux";
import { settingsApplied } from "./reducers/settingsSlice";
import { settingsChanged } from "./reducers/settingchangesSlice";
import { useForm } from "react-hook-form";

const App = () => {

  const { control, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();

  watch((data) => {
    dispatch(settingsChanged(data));
  });


  const onSubmit = (data) => {
    dispatch(settingsApplied(data));
  };

  return (

    <>
      <form autoCapitalize="off" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ minHeight: "800px" }}>
          <div style={{
            padding: "25px",
            margin: "0",
            background: "linear-gradient(#fefefe,#f5f5f5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{ float: "left", width: "50%" }}>
              <h1 style={{
                fontSize: "20px",
                lineHeight: "26px",
                fontWeight: "400",
                color: "#1d2327",
                fontFamily: "-apple-system,BlinkMacSystemFont,Sege UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
              }}>Wp ULike</h1>
            </div>
            <div style={{ float: "right", width: "50%", display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                name="submit"
                style={{
                  background: "#2271b1",
                  borderColor: "#2271b1",
                  color: "#fff",
                  textDecoration: "none",
                  textShadow: "none",
                  padding: "0 10px",
                  cursor: "pointer",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  fontSize: "13px",
                  minHeight: "30px",
                  minWidth: "72px",
                  borderRadius: "3px"
                }}
              />
            </div>
          </div>
          <div style={{ clear: "both" }}>
            <TabsList control={control} />
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
