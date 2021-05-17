import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  state: any = {
    test: 123,
    viewList: [
      {
        type: 1,
      },
      {
        type: 1,
      },
      {
        type: 2,
      },
      {
        type: 4,
      },
      {
        type: 4,
      },
    ],
  };
  componentDidShow() {
    this.setState({
      test: 222,
    });
  }
  render() {
    const componentView = (item: any) => {
      console.log(item);
      return <View></View>;
    };
    return (
      <View className="index">
        <View className="component">
          {this.state.viewList.map((item: any) => {
            return (
              <View className="component-item" key={item.id}>
                {item.title ? (
                  <View className="component-item_name font-SM">
                    {item.title}
                  </View>
                ) : (
                  ""
                )}
                <View className="component-item_content">
                  {componentView(item)}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
