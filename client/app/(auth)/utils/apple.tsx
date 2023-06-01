import * as AppleAuthentication from "expo-apple-authentication";
import { useAuth } from "~/stores/auth";

export default () => {
    const { toggle } = useAuth();

    return (
        <AppleAuthentication.AppleAuthenticationButton
            buttonType={
                AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
            }
            buttonStyle={
                AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={5}
            style={{
                width: "100%",
                marginVertical: 32,
                padding: 18,
            }}
            // onPress={async () => {
            //     try {
            //         const credential =
            //             await AppleAuthentication.signInAsync({
            //                 requestedScopes: [
            //                     AppleAuthentication
            //                         .AppleAuthenticationScope.FULL_NAME,
            //                     AppleAuthentication
            //                         .AppleAuthenticationScope.EMAIL,
            //                 ],
            //             });
            //         // signed in
            //         console.log(credential);

            //     } catch (e: any) {
            //         if (e.code === "ERR_REQUEST_CANCELED") {
            //             // handle that the user canceled the sign-in flow
            //         } else {
            //             // handle other errors
            //         }
            //     }
            // }}
            onPress={() => {
                console.log("triggered");
                toggle();
            }}
        />
    );
};
