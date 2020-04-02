import React from "react";
import { Spring } from "react-spring/renderprops";
import { useSelector } from "react-redux";

const HandCream = props => {
  const splashScreenComplete = useSelector(
    state => state.splashScreenComplete.splashScreenComplete
  );
  return (
    <Spring
      from={{ display: "none", opacity: "0" }}
      to={{ display: "inline", opacity: "1" }}
      config={{
        delay:
          props.initialScreenSize >= 600
            ? props.currentScreenSize >= 600 || !props.currentScreenSize
              ? 5000
              : 4000
            : 4000,
        duration: 550
      }}
    >
      {props => (
        <svg
          className="hand_cream"
          width="100%"
          style={{
            display: splashScreenComplete ? "inline" : `${props.display}`,
            opacity: splashScreenComplete ? "1" : `${props.opacity}`
          }}
          viewBox="0 0 50 50"
        >
          <g transform="translate(0 -850) scale(3)">
            <g
              id="g826"
              transform="matrix(.16186 0 0 .16755 87.278 310.655)"
              strokeWidth=".265"
            >
              <path
                d="M-513.398-97.957c.012-12.482-.055-14.736-.687-23.217-.706-9.481-2.551-35.834-2.552-36.446 0-.444 40.12-.49 40.268-.046.052.157.007 1.496-.102 2.977-.108 1.48-.32 4.537-.473 6.792-.152 2.256-.392 5.59-.533 7.408a883.718 883.718 0 00-.524 7.277c-.417 6.192-.766 11.146-1.23 17.462-.307 4.182-.425 9.323-.42 18.256.005 6.84-.049 12.644-.118 12.899-.119.434-1.149.463-16.884.463h-16.758z"
                id="path840"
                fill="rgb(28, 157, 205)"
              />
              <path
                d="M-512.962-84.198c-.015-.037-.071-4.576-.124-10.087-.06-6.388.001-10.201.171-10.518.25-.468.708-.496 8.033-.496 6.84 0 7.787-.05 7.928-.418.089-.23.16-12.077.16-26.327v-25.907h10.055c5.53 0 10.054.097 10.054.216 0 .211-1.034 15.382-1.582 23.2-.152 2.182-.39 5.397-.529 7.143-.138 1.747-.383 5.14-.544 7.541-.161 2.401-.443 6.568-.626 9.26-.185 2.726-.237 5.24-.117 5.674.239.862.284 19.788.05 20.4-.127.33-2.454.385-16.524.385-9.007 0-16.389-.03-16.405-.066z"
                id="path838"
                fill="#d3d4d6"
              />
              <path
                d="M-513.037-84.55c-.265-.692-.18-4.342.114-4.891.266-.498.728-.512 16.508-.512 14.56 0 16.25.043 16.395.418.208.544.208 4.44 0 4.984-.144.376-1.846.419-16.508.419-14.663 0-16.365-.043-16.509-.419zm.256-10.052c-.347-.347-.416-1.19-.416-5.045 0-2.684.115-4.843.274-5.14.26-.488.632-.512 8.041-.512 6.84 0 7.787-.05 7.928-.418.089-.23.161-12.077.161-26.327v-25.907h10.054c5.53 0 10.054.097 10.054.216 0 .211-1.034 15.382-1.582 23.2-.152 2.182-.39 5.397-.529 7.143-.138 1.747-.383 5.14-.544 7.541-.161 2.401-.443 6.568-.626 9.26-.19 2.783-.238 5.237-.113 5.687.318 1.149.273 9.593-.055 10.206-.254.475-.595.512-4.721.512-3.973 0-4.494-.052-4.886-.484-.24-.266-.437-.606-.437-.756 0-.15-.413-.812-.917-1.473-1.298-1.7-3.005-2.59-5.31-2.768-1.633-.126-2.02-.062-3.185.528-1.483.752-3.26 2.538-3.781 3.803-.19.459-.603.904-.918.988-.316.085-2.262.156-4.325.158-3.061.003-3.828-.073-4.167-.412zm15.23.132c-.517-.208-.569-.32-.298-.645.358-.432 1.766-.523 2.351-.152a.568.568 0 01.207.657c-.18.471-1.264.538-2.26.14z"
                id="path836"
                fill="rgb(47, 128, 183)"
              />
              <path
                d="M-512.933-86.637c0-2.211.06-2.536.516-2.78.346-.185 5.732-.253 16.338-.207l15.822.068.076 2.712.075 2.712h-32.827zm23.651-8.017c-.161-.106-.49-.58-.732-1.05-1.468-2.866-4.283-4.464-7.646-4.343-1.995.072-4.737 2.053-5.756 4.158l-.568 1.173h-4.314c-3.69 0-4.337-.06-4.474-.418-.21-.546-.21-8.672 0-9.217.141-.368 1.068-.419 7.69-.419 4.685 0 7.723-.103 8.042-.274.5-.268.512-.843.512-26.59v-26.317h19.583l-.13 1.389c-.073.764-.254 3.235-.403 5.49a1736.33 1736.33 0 01-.526 7.673c-.14 1.965-.381 5.477-.534 7.805a641.679 641.679 0 01-.533 7.409c-.562 7.007-1.36 19.68-1.341 21.299.01.945.085 3.963.165 6.705.105 3.6.06 5.09-.163 5.358-.24.29-1.211.371-4.443.368-2.274-.002-4.267-.092-4.429-.199zm-7.643-.326c.09-.146.328-.265.529-.265.2 0 .44.12.529.265.093.15-.135.264-.53.264-.394 0-.621-.114-.528-.264z"
                id="path834"
                fill="rgb(0, 129, 177)"
              />
              <path
                d="M-512.611-86.712l.075-2.58 15.663-.232c8.614-.127 15.847-.16 16.073-.074.334.128.411.656.411 2.812v2.654h-32.298zm23.328-7.938c-.162-.109-.54-.682-.84-1.274-.59-1.163-2.218-2.769-3.413-3.367-1.4-.7-3.84-1.058-5.03-.737-1.643.442-3.55 1.85-4.51 3.328-.472.728-.986 1.475-1.141 1.66-.211.253-1.293.32-4.3.265l-4.019-.073-.072-4.829c-.04-2.655-.04-4.853 0-4.883.276-.208 30.868-.799 31.63-.61l.6.149-.071 5.219-.072 5.219-4.233.065c-2.329.037-4.367-.023-4.529-.132zm-7.375-.335c.091-.147.277-.2.412-.116.367.227.299.385-.166.385-.227 0-.337-.12-.246-.269z"
                id="path832"
                fill="rgb(0, 96, 144)"
              />
              <path
                d="M-496.736-86.712l.075-2.58 7.92-.07c6.16-.054 7.966.004 8.132.265.116.184.214 1.376.216 2.65l.004 2.315H-496.812zm7.013-9.183c-1.03-2.16-3.086-3.716-5.813-4.396l-1.257-.314v-1.94c0-1.649.077-1.983.512-2.215.655-.351 14.81-.365 15.363-.016.317.2.414 1.039.483 4.146.048 2.142.013 4.29-.078 4.772l-.164.878h-8.61z"
                id="path830"
                fill="rgb(0, 59, 110)"
              />
              <path
                d="M-496.472-86.58l.076-2.447 7.739-.07 7.739-.07v2.099c0 1.154.072 2.287.16 2.517.145.376-.65.419-7.815.419h-7.975zm7.167-9.128c-.377-1.034-1.766-2.77-2.726-3.405-.561-.371-1.773-.933-2.693-1.248l-1.672-.573v-3.439l7.739-.07 7.739-.07v9.268h-4.11c-3.672 0-4.127-.049-4.277-.463z"
                id="path828"
                fill="rgb(0, 38, 87)"
              />
            </g>
          </g>
        </svg>
      )}
    </Spring>
  );
};

export default HandCream;
