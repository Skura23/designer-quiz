import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '第一周', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "下面哪个图标是对的",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "",
			"answer_img": require('../../static/1_1.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "",
			"answer_img": require('../../static/1_2.png'),
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "",
			"answer_img": require('../../static/1_3.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "",
			"answer_img": require('../../static/1_4.png'),
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪个网站可以让设计作品实现最大的经济价值？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "淘宝",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "站酷",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "猪八戒网",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "自个网",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪个颜色不是Pantone发布的2018年流行色",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "青柠调酒黄",
			"answer_img": require('../../static/4_1.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "紫外光",
			"answer_img": require('../../static/4_2.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "树脂绿",
			"answer_img": require('../../static/4_3.png'),
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "暖沙色",
			"answer_img": require('../../static/4_4.png'),
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪个不是平面设计的三要素",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": "图片",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "字体",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "配色",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "排版",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "传说设计师的A站是Artstation  B站是Behance、D站是dribbble那么 同理可得,Z站是什么？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "ZOL",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "zigeer",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "Zaker",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "Zhihu",
			"is_standard_answer": 0
		}]
	},
	{
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪个Adode CC 2018的启动画面是错误的",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 21,
			"topic_id": 21,
			"answer_name": "",
			"answer_img":  require('../../static/2_1.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 22,
			"topic_id": 21,
			"answer_name": "",
			"answer_img":  require('../../static/2_2.png'),
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 23,
			"topic_id": 21,
			"answer_name": "",
			"answer_img":  require('../../static/2_3.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 24,
			"topic_id": 21,
			"answer_name": "",
			"answer_img":  require('../../static/2_4.png'),
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪本书对应的作者是错误的？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 25,
			"topic_id": 21,
			"answer_name": "《为什么设计》—松田行正",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 26,
			"topic_id": 21,
			"answer_name": "《设计中的设计》—原研哉",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 27,
			"topic_id": 21,
			"answer_name": "《写给大家看的设计书》—Robin Williams",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 28,
			"topic_id": 21,
			"answer_name": "《设计的觉醒》—田中一光",
			"is_standard_answer": 0
		}]
	},{
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面这张图属于什么风格？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"quesImg":require('../../static/9.png'),
		"topic_answer": [{
			"topic_answer_id": 29,
			"topic_id": 21,
			"answer_name": "蒸汽波艺术",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 30,
			"topic_id": 21,
			"answer_name": "孟菲斯艺术",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 31,
			"topic_id": 21,
			"answer_name": "MBE插画风格",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 32,
			"topic_id": 21,
			"answer_name": "Low poly风格",
			"is_standard_answer": 1
		}]
	},
	{
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "下面哪个设计师对应的作品是错误的？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 33,
			"topic_id": 21,
			"answer_name": "村上隆",
			"answer_img": require('../../static/3_1.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 34,
			"topic_id": 21,
			"answer_name": "草间弥生",
			"answer_img": require('../../static/3_2.png'),
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 35,
			"topic_id": 21,
			"answer_name": "杉浦康平",
			"answer_img": require('../../static/3_3.png'),
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 36,
			"topic_id": 21,
			"answer_name": "田中一光",
			"answer_img": require('../../static/3_4.png'),
			"is_standard_answer": 0
		}]
	},
	{
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "你觉得下面有几点是AI设计师鲁班望尘莫及、无法取代的？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 37,
			"topic_id": 21,
			"answer_name": "颜值",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 38,
			"topic_id": 21,
			"answer_name": "发量",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 39,
			"topic_id": 21,
			"answer_name": "对设计的热爱",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 40,
			"topic_id": 21,
			"answer_name": "对甲方的恨",
			"is_standard_answer": 1
		}]
	}
],
	answerid: [], //答案id
	scoreData:{}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})