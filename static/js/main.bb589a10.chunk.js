(this["webpackJsonpdino-game"]=this["webpackJsonpdino-game"]||[]).push([[0],{14:function(A,t,e){"use strict";e.r(t);var a=e(1),g=e(0),i=e.n(g),s=e(3),o=e.n(s),I=e(7),n=e(4),c=e(5),h=e(8),l=e(6),p="STOP",m="START",u="PAUSE",C="OVER",r=e.p+"static/media/dinosaur.196c6537.png",b=e.p+"static/media/dinosaur_left.38664ae7.png",d=e.p+"static/media/dinosaur_right.536513e6.png",Z=e.p+"static/media/dinosaur_die.a3becd12.png",W=new Image,R=new Image,G=new Image,w=new Image,Y=new Image,y=new Image,B=new Image,v=new Image,O=new Image,S=new Image,E=new Image,k=new Image,j=new Image;W.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAIAAAAADNU2siAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAA7klEQVRYCe2X4QrDIAyEu7E39Dl9xpUMrgTRXjTBynB/1KRePi/YsuNY7PfSPCmlr17PmuecL45r8hQMDg2oH9DTMBrqjcUq438Boe+R7rodioZyA4k7kVAfq92sqOTL26r3lLlWXZNDWrglJPG75+5yWpMCWYVElLlg0TK3rFZQF6jBIKaf027U5tSh2qYyhsJlfGTtBoqEkQO4gKJh3EAjLWF7XA4x8ZH8BmKudb2Het4nrHArT1sWeZMsWhRITmIRap0YcauGuWVWQQCMjiaHRsVH9m0g5tp2iDm05l9pUM+62qiHccYXALW6xxOty0xAsY5zEgAAAABJRU5ErkJggg==",R.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAANCAYAAAAUndpuAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAw6ADAAQAAAABAAAADQAAAAAd+WA6AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABe0lEQVRoBe1WQQ6DMAxj037IO3njpmwyiiJnZW2YBJhL2zSxHVcFpkmPHJADbwduzId5np8sjtiyLLQO+62R4VdiMizPyfZ7NGc1PfgZVivu+4q5Izo8LsNp7Uctce3r415cM/6YE9db8CPuPYJoLQeu6sAjNu5vVLw5MbdnHfGxtrGKD5iGh3mP1qymSmeGvyXu+2J6bB85bH8Lx79y9tbH8Jk/62WAcWYAKx41JsMHFxNXyTmKpfrzO6DfpPOfsTrc6MD6Zcjy/RsdOXibY321kXliHpzVF/Rr/WFeeeYZ5h5+ZlzWT/MyQNA3kF+NqcRi3F6zn7Pcnhgwe2qPUoMe/Vn5ufWBnNGeqnAyHVF3pl2/SZmDil/OgfXLgNtptwg3CbFqVxguOCu5GE8l/hWwzEN2NkfyFlp9HzZHHOe4XgYEfPO+GPsap6nlSzR5D8/AYVoyPcgZ5QeO8WA+iunrM/3IqeI0HM+FOfD1mwTHNcoBOSAH5MDHgRdHpNYavh/wcwAAAABJRU5ErkJggg==",G.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAAAsAQMAAACTyNj4AAAABlBMVEUAAADAwMBkVjpxAAAAAXRSTlMAQObYZgAAAPZJREFUSMft1TFKA1EUheH/ZoZkhOBMGTAks4RUkkIwO3ALwRVYWsnbiWtwB28p09kO2FhIxlda/p0Q5lvA4XBucZn9mxiwdmiPR6TqK2Gd10hLMlLkGmnLSaeySjgdrz61/tGpTxmnpalxRpKdYIOdIBJ2gnYEXOoENLoqDLYqt/YCRa9SKRYY8UHRIdx1QGBUTMWIcGingtls9scDVpWxVp9Yby9Y60hIeYN1xKZWqcHqGXEWtPjU92RTb75xYgg7wY6uwanATnDAThAXoMPYDxC+KltblcjyAkUtz1qcMO57+3KrZ/3HOe/Lb7wgLGMqBmZX5BcmCDOa4UeMHQAAAABJRU5ErkJggg==",w.src="data:image/png;base64,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",Y.src=r,y.src=b,B.src=d,v.src=Z,O.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAkCAYAAABWvWC/AAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAJAAAAACj+usCAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAAi0lEQVRIDe2U0QqAIAxFTfpDv9NvLAwOLJmxTQikepnpznV3likt+WyjqkspB2u1VjVPnZTgk0BmMRLfh7Hl3hmwRTcsezMPU4pUtYwzINECkTNfNkreuOjOu9Wndhphz+0fD8FcDuayAaTNG6z5ksn9OGuKfdLo/fIcFfjSBUgDQx/JD9MBZ5zq9glZNSYuDWzH6gAAAABJRU5ErkJggg==",S.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAvCAYAAABHXlKwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA3oAMABAAAAAEAAAAvAAAAAAvIPgoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj40OTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K4/roAgAAAQ9JREFUaAXtl4EKwyAQQ9uxP/Q7/cYNB5EStLPXXes0g2FbzzN5wY0uiz4iIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAJzEwghvNJ3RArPHk2dhR1jXJOvbI4boqBmnutrdXvPv+2xt7ZlLptrKfau+QWwpBF9Vlx4C7f0R7JWjQ/Lpv+y5nPwklgrnZ6NzpEcEhgpwbmSGynBOZPrOUH8/0FjbZw7OVDx/BXlJKx7cR8lh/TSaKW67cHXTJznrffubwUl4QBUmrMaKa07ZA6iuBGL3Nbhmmu4h8f9rWcuGYd5D3OHkmMBtTRqz3m99/0pc1ZxV5k3mbtKnBUe1t165iDCa8xv4i0b8OHvPcGhk3sDlqVQC0Idzf4AAAAASUVORK5CYII=",E.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAuCAYAAACMAoEVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA3oAMABAAAAAEAAAAuAAAAADaoF7oAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj40NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KO7JoBQAAARVJREFUaAXtl4EOgyAMRHXZH/KdfONMlxxZGipYZKLckkWB0l7fyRaXhR8SIAESIAESIAESIAESIAESIAESIAESIIEigRDCR77FwBsGvEfU3Ao7xrhKX6k5nRABVvM63orbmy/V2Ntbs5aaqwnuHXMGMNGIPCtuegv35IezXo0vT9G77PkePBHrpTNyo3M4Bwee5OBczj3JwTmdG9lB/P9Bo3Wd2zlQ6fkrqp3w1tJ56Bzck6uX6m8Ofa+J63XvuPtbQU44AOXWvI3k9h1qzhKFeV2gt3hdT48vPXMCxQKjhXrGh5xDAQiynLHmsf9fV1dzreJGab6qj96PV5WITNClZy6j59Sp9CbekhVnEDlGeewe7dwGVEtR75C6U0wAAAAASUVORK5CYII=",k.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA4CAYAAACGwxqMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAsoAMABAAAAAEAAAA4AAAAAHvT+P8AAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+OTA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KVfazNAAAANhJREFUaAXt1NEOgyAMhWG3+IY8J884s4uziy4dMEtcx29iSG1t4LNx27gQiBUopTyed2xXv9vdT/1m5nZ2W1a31nq656c9ISydWdL/K9yaVZufJZ1OeJeEt3pyXr19rvejZjqdsPvPlIwVs7HkRuttn944nfDbDPdK9YrYOvXXl7H5VpxO+DXDOnnrhFH59YRH5aK+yKh03hkeFVZ9lLT6tdb1hCUSLe3N9rrCs6TVV+IIS+TbmZak+tg1nbA9ADECCCCAAAIIIIAAAggggAACCCCAAAIXCRyUDz4FQz7cAgAAAABJRU5ErkJggg==",j.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAA4CAYAAABpAXGyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAtoAMABAAAAAEAAAA4AAAAAPx1M7wAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+OTA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KVfazNAAAANlJREFUaAXt1tEKhCAQheF26Q19Tp9xFxYO1KAmNboM/t1Ylkf5nKht40AAAQQQQMBZ4NWTl1L6HJ/LOXeNO47xPH97hs3K2lsTWeHWszPvhZQu1mav8L9qO6T0qaZ7hWfWb2mukNK/mp4t/PRdiCtdqptWn9fO3BVfR1q74CWuvKtWO7OetGS8xSWqfNsibUW8rq18SOnTv4eXzN0cK1rLQbom0ytYG2/7kbYi3sLKR1oSo4SVH1KaRWv7RreuX8TRtSyMkOWhxdMigAACCCCAAAIIIIDAIgJfZb8qXANskF8AAAAASUVORK5CYII=";var M=function(A){Object(h.a)(e,A);var t=Object(l.a)(e);function e(A){var a;Object(n.a)(this,e),(a=t.call(this,A)).start=function(){a.status!==m&&(a.status=m,a.__setTimer(),a.jump())},a.pause=function(){a.status===m&&(a.status=u,a.__clearTimer())},a.goOn=function(){a.status===u&&(a.status=m,a.__setTimer())},a.stop=function(){a.status!==C&&(a.status=C,a.playerStatus=3,a.__clearTimer(),a.__draw(),a.__clear(),a.playerStatus=0,a.playerCrouch=!1)},a.restart=function(){a.obstacles=a.__obstaclesGenerate(),a.start()},a.jump=function(){a.jumpHeight>2||(a.jumpDelta=5,a.jumpHeight=5)};var g=0,i=function(){3===++g&&a.__draw()};return G.onload=i,w.onload=i,Y.onload=i,a.options=Object(I.a)({fps:60,skySpeed:40,groundSpeed:200,skyImage:G,groundImage:w,dinoImage:{0:Y,1:y,2:B,3:v,4:S,5:E},obstacleImage:O,skyOffset:0,groundOffset:0},a.props.options),a.status=p,a.timer=null,a.score=0,a.highScore=window.localStorage&&window.localStorage.highScore||0,a.jumpHeight=0,a.jumpDelta=0,a.obstaclesBase=1,a.obstacles=a.__obstaclesGenerate(),a.currentDistance=0,a.playerStatus=0,a.playerCrouch=!1,a}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var A=this;window.innerWidth>=680&&(this.canvas.width=680);var t=function(){switch(A.status){case p:A.start();break;case m:A.jump();break;case C:A.restart()}},e=function(t){A.status===m&&("down"===t?(A.playerStatus=A.playerStatus%2+4,A.playerCrouch=!0):"up"===t&&(A.playerStatus=0,A.playerCrouch=!1))};window.onkeypress=function(e){"Space"===e.code||"ArrowUp"===e.code||"KeyW"===e.code?t():"KeyP"===e.code&&function(){switch(A.status){case u:A.goOn();break;case m:A.pause()}}()},window.onkeydown=function(A){"ArrowDown"!==A.code&&"KeyS"!==A.code||e("down")},window.onkeyup=function(A){"ArrowDown"!==A.code&&"KeyS"!==A.code||e("up")},this.canvas.parentNode.onclick=t,window.onblur=this.pause,window.onfocus=this.goOn}},{key:"componentWillUnmount",value:function(){window.onblur=null,window.onfocus=null}},{key:"__draw",value:function(){if(this.canvas){var A=this.options,t=Math.min(200,Math.floor(this.score/100)),e=(A.groundSpeed+t)/A.fps,a=A.skySpeed/A.fps,g=A.obstacleImage.width,i=A.dinoImage[0].width,s=A.dinoImage[0].height,o=this.canvas.getContext("2d"),I=this.canvas,n=I.width,c=I.height;o.clearRect(0,0,n,c),o.save(),this.options.skyOffset=this.options.skyOffset<n?this.options.skyOffset+a:this.options.skyOffset-n,o.translate(-this.options.skyOffset,0),o.drawImage(this.options.skyImage,0,0),o.drawImage(this.options.skyImage,this.options.skyImage.width,0),this.options.groundOffset=this.options.groundOffset<n?this.options.groundOffset+e:this.options.groundOffset-n,o.translate(this.options.skyOffset-this.options.groundOffset,0),o.drawImage(this.options.groundImage,0,76),o.drawImage(this.options.groundImage,this.options.groundImage.width,76),o.translate(this.options.groundOffset,0),o.drawImage(this.options.dinoImage[this.playerStatus],80,64-this.jumpHeight),this.jumpHeight=this.jumpHeight+this.jumpDelta,this.jumpHeight<=1?(this.jumpHeight=0,this.jumpDelta=0):this.jumpHeight<53&&this.jumpDelta>0?this.jumpDelta=.001033*Math.pow(this.jumpHeight,2)-.137*this.jumpHeight+5:this.jumpHeight>=53&&(this.jumpDelta=-2.5);var h=this.status===C?"GAME OVER  ":"";h+=Math.floor(this.score),o.font="Bold 18px Arial",o.textAlign="right",o.fillStyle="#595959",o.fillText(h,n-30,23),this.status===m&&(this.score+=.5,this.score>this.highScore&&(this.highScore=this.score,window.localStorage.highScore=this.highScore),this.currentDistance+=e,this.score%4===0&&(this.playerCrouch?this.playerStatus=(this.playerStatus+1)%2+4:this.playerStatus=(this.playerStatus+1)%3)),this.highScore&&(o.textAlign="left",o.fillText("HIGH "+Math.floor(this.highScore),30,23));for(var l=0,p=0;p<this.obstacles.length&&(console.log(l),this.currentDistance>=this.obstacles[p].distance);++p){var u=n-(this.currentDistance-this.obstacles[p].distance+e);u>0?o.drawImage(this.options.obstacleImage,u,74):++l}for(var r=0;r<l;++r)this.obstacles.shift();this.obstacles.length<5&&(this.obstacles=this.obstacles.concat(this.__obstaclesGenerate()));var b=n-(this.currentDistance-this.obstacles[0].distance+e);90-g<b&&b<60+i&&64-this.jumpHeight+s>84&&(o.drawImage(R,n/2-70,40),o.drawImage(W,n/2+10,55),this.stop()),o.restore()}}},{key:"__obstaclesGenerate",value:function(){for(var A=[],t=0;t<10;++t){var e=Math.floor(100*Math.random())%60;e=(10*Math.random()%2===0?1:-1)*e,A.push({distance:e+200*this.obstaclesBase}),++this.obstaclesBase}return A}},{key:"__setTimer",value:function(){var A=this;this.timer=setInterval((function(){A.__draw()}),1e3/this.options.fps)}},{key:"__clearTimer",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"__clear",value:function(){this.score=0,this.jumpHeight=0,this.currentDistance=0,this.obstacles=[],this.obstaclesBase=1,this.playerStatus=0}},{key:"render",value:function(){var A=this;return Object(a.jsx)("canvas",{id:"canvas",ref:function(t){return A.canvas=t},height:160,width:340})}}]),e}(i.a.Component);o.a.render(Object(a.jsx)(M,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bb589a10.chunk.js.map