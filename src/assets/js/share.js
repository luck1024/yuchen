export default {
	checkChar(v,min,max){
		
		let reg =new RegExp("^[a-zA-Z0-9_]{"+min+ ","+max+"}$");
		return reg.test(v);
	},
	
	
	isPC() {
			let userAgentInfo = navigator.userAgent;
			let Agents = ["Android", "iPhone",
				"SymbianOS", "Windows Phone",
				"iPad", "iPod"
			];
			let flag = true;
			for (let v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
	
			return flag;
		},
	showMessage(config) {
			let flag = this.isPC();
			let m = document.createElement('div');
			m.id = 'message';
			m.style.display = 'flex';
			m.style.position = 'fixed';
			m.style.backgroundColor = 'transparent';
			let d = document.createElement('div');
			if (flag)
				d.style.width = '25rem';
			else
				d.style.width = '20rem';
	
			let p_title = document.createElement('p');
			let p_text = document.createElement('p');
			let p_buttom = document.createElement('p');
	
			if (config.title == undefined)
				p_title.innerText = '系统提示';
			else
				p_title.innerText = config.title;
			p_title.style.textAlign = 'left';
			p_text.innerText = config.text;
			p_text.style.textAlign = 'center';
			p_buttom.style.textAlign = 'center';
			let ok = document.createElement('button')
			ok.className = 'button';
			let no = document.createElement('button')
			no.className = 'button';
			ok.innerText = "确定";
			no.innerText = "取消";
	
			no.style.backgroundColor = '#c6c6c6';
			no.style.marginLeft = '1rem'
			let time = 2000;
			if (config.type == undefined || config.type == 'alert') {
				ok.style.backgroundColor = '#4188e8';
				ok.onclick = () => {
					clearTimeout(clear);
					document.body.removeChild(m);
				}
				if (config.time == undefined)
					time = 2000;
				else
					time = config.time;
				var clear = setTimeout(() => document.body.removeChild(m), time);
	
				p_buttom.appendChild(ok);
			} else {
				ok.style.backgroundColor = '#00aa00';
				ok.onclick = () => {
					document.body.removeChild(m);
					config.ok();
				}
				no.onclick = () => document.body.removeChild(m);
				p_buttom.appendChild(ok);
				p_buttom.appendChild(no);
			}
			d.appendChild(p_title);
			d.appendChild(p_text);
			d.appendChild(p_buttom);
			m.appendChild(d);
			document.body.appendChild(m);
		}

	
	
	
}