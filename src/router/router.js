import App from "../App";

export default [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "",
        component: r =>
          require.ensure([], () => r(require("../page/home")), "home")
      },
      {
        path: "/item",
        component: r =>
          require.ensure([], () => r(require("../page/item")), "item")
      },
      {
        path: "/score",
        component: r =>
          require.ensure([], () => r(require("../page/score")), "score")
      },
      {
        path: "/answers",
        component: r =>
          require.ensure([], () => r(require("../page/answers")), "answers")
      },
      {
        path: "/scoreImg",
        component: r =>
          require.ensure([], () => r(require("../page/scoreImg")), "scoreImg")
      }
    ]
  }
];
