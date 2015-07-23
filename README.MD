#VK_DELETE_POSTS - Удаление постов вконтакте (vk.com delete posts)
##Использование (Usage)

* Заходим на vk.com (go to vk.com)
* Переходим на "Моя страница" (click to "My Profile")
* Копируем этот код и вставляем в адресную строку браузера и жмем Enter (copy this code and paste to adress bar and press enter)
```
javascript:function removeposts(){i==posts.length?(next.click(),flag++,flag>3&&(clearInterval(inval_id),alert("Удаление постов завершено!"))):(posts[i].click(),i++,flag=0)}var i=0,posts=document.getElementsByClassName("post_delete_button"),next=document.getElementById("wall_more_link"),inval_id,flag=0;inval_id=setInterval(removeposts,800);
```
* Ждите появления сообщения (Wait for message)
* Profit!

