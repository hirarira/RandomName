var NoHead_List = [12449,12451,12453,12455,12457,12483,12515,12517,12519,12526,12528,12529,12530,12531,12597,12598,12599];
var NoUse_LIST =  [12449,12451,12453,12455,12457,12483,12515,12517,12519,12526,12528,12529];

function HeadUseCheck(num){
	if(num >= 64 && num < 100){
		return false;
	}
	return (NoHead_List.indexOf(num) == -1) ? true : false;
}
function UseCheck(num){
	return (NoUse_LIST.indexOf(num) == -1) ? true : false;
}

function Rand_Char(c_head){
	// 12449 - 12534 ァ-ヶ		75%		1種文字
	// 0 - 70 その他文字		25%		2種文字
	// 第二種混入確率
	var one_probability = ( 100 - document.name_form.one_probability.value );
	
	var x;
	// 先頭語の場合
	if(c_head){
		do{
			// 1種文字
			// Math.floorは切り捨て
			if( ( Math.random() * 100 ) < one_probability ){
				x = Math.floor( Math.random() * 84 ) + 12449;
			}
			// 2種文字
			else{
				x = Math.floor( Math.random() * 75 );
			}
		}while( !HeadUseCheck(x) )
		return x;
	}
	// それ以外の場合
	else{
		do{
			// 1種文字
			// Math.floorは切り捨て
			if( ( Math.random() * 100 ) < one_probability ){
				x = Math.floor( Math.random() * 84 ) + 12449;
			}
			// 2種文字
			else{
				x = Math.floor( Math.random() * 75 );
			}
		}while( !UseCheck(x) )
		return x;
	}
}
// 小文字出力
function lc(num){
	num %=5;
	switch(num){
		case 0:return "ャ";
		case 1:return "ィ";
		case 2:return "ュ";
		case 3:return "ェ";
		case 4:return "ョ";
	}
}
// 数値→文字変換
function NtoC(num){
	var back_c;
	if(num > 100){
		return String.fromCharCode(num);
	}
	else{
		if(num < 5){
			back_c = "キ" + lc(num);
		}
		else if(num < 10){
			back_c = "シ" + lc(num);
		}
		else if(num < 15){
			back_c = "チ" + lc(num);
		}
		else if(num < 20){
			back_c = "ニ" + lc(num);
		}
		else if(num < 25){
			back_c = "ヒ" + lc(num);
		}
		else if(num < 30){
			back_c = "ミ" + lc(num);
		}
		else if(num < 35){
			back_c = "リ" + lc(num);
		}
		else if(num < 40){
			back_c = "ギ" + lc(num);
		}
		else if(num < 45){
			back_c = "ジ" + lc(num);
		}
		else if(num < 50){
			back_c = "ヂ" + lc(num);
		}
		else if(num < 55){
			back_c = "ビ" + lc(num);
		}
		else if(num < 60){
			back_c = "ピ" + lc(num);
		}
		else if(num < 64){
			switch(num){
				case 60: back_c = "ファ"; break;
				case 61: back_c = "フィ"; break;
				case 62: back_c = "フェ"; break;
				case 63: back_c = "フォ"; break;
			}
		}
		else{
			back_c = "ー";
		}
		return back_c;
	}
}
function Make_name(){
	var output_num = document.name_form.o_num.value;
	document.name_form.result.value = "";
	var i,j;
	var max_length = document.name_form.max_length.value - 2;
	/*
	// デバッグ出力用
		for(i=12449;i<12535;i++){
		document.name_form.result.value += String.fromCharCode(i) + ":" +(i) + ":" + HeadUseCheck(i);
		document.name_form.result.value += "\n";
	}
	*/
	// 乱数命名
	var rname,rlength,nc,hc;
	for(i=0;i<output_num;i++){
		if(document.name_form.add_no.checked){
			document.name_form.result.value += (i+1)+"：";
		}
		rname = "";
		hc = false;
		rlength = Math.floor( Math.random() * (max_length) ) + 3;
		for(j=0;j<rlength;j++){
			nc = Rand_Char( !hc );
			hc = HeadUseCheck( nc );
			rname += NtoC( nc );
			if( NtoC( nc ).length == 2){
				j++;
			}
		}
		document.name_form.result.value += rname + "\n";
	}
}