var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '課堂內容', 'text': '', 'tags': '', 'url': '課堂內容.html'}, {'title': 'W1', 'text': '概要:介紹課程，複習大一內容，可攜系統製作 \n 可攜系統與網頁製作: \n 1. 下載fall2020_cp.7z壓縮檔，解壓縮 \n 從Git網站下載PortableGit，解壓縮放入data中 PortableGit資料夾 \n 2. 修改start中git路徑 \n \n 設定gitconfig \n \n 3. 儲存後重新啟動 \n 4. git clone自己倉儲的網址 \n \n 5. 進入github創建cad2020倉儲 \n \n 6. cad2020資料夾創建cmsimde資料夾(黑窗) \n git submodule add  https://github.com /mdecourse/cmsimde.git \n \n 7. 複製cmsimde中up_dir資料夾內容至cad2020，不取代重複檔案 \n \n 8. 下在網站需要的模組(黑窗) \n pip install flask flask_cors lxml bs4 markdown pelican leo\xa0 \n \n 9. 進入cmimde，wsgi.py啟動動態網頁localhost9443 \n \n 補充: \n pip list:查看已安裝模組 \n git version:查看git版本 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W1 HW', 'text': 'Onshape: \n 50:\xa0 https://cad.onshape.com/documents/67764ee60a5a930646481922/w/8d5c2932806e0266e9c7218a/e/ac0e9f517905e8da59abd25b \n 49:\xa0\xa0 https://cad.onshape.com/documents/01e7069f13259813a8d9d27c/w/99fdba19917d1ef99ef683c4/e/2609a64dca9aafaaba05555b \n 48:\xa0 https://cad.onshape.com/documents/3e25b6500f93301668df7d6b/w/d1846da3c276c9e0d5cf401b/e/e21050c18b539b3897e6a3a2 \n 47:\xa0 https://cad.onshape.com/documents/45a560ebaf4a497f0f90c2b9/w/7947cb4bb18e1fdcdccf65bd/e/4dc9b657625027f686b6f53b \n 46:\xa0 https://cad.onshape.com/documents/aa4cdeff537672031f1c4dae/w/0d35e716a9cf298be8572ce3/e/0fc7edf305f47ad8e4853700 \n 45:\xa0 https://cad.onshape.com/documents/d5731540440927e9a4589133/w/76d921b9c5beb2f42a6aeb63/e/2d30e232d3dc9e16bddd7f6d \n 44:\xa0 https://cad.onshape.com/documents/0779af89eb97d85d13e888eb/w/020ec7fe0b6de477f00fa8c5/e/a8e94eb8296b598cfcc3052e \n 43:\xa0 https://cad.onshape.com/documents/4a89391b508fa5aae8901948/w/7986994a9ddaa23e685b1ccd/e/ca1c6894c2d37313943ce59c \n 42:\xa0 https://cad.onshape.com/documents/3408f1be84670050b83e0652/w/529e7068248dff66780aa2f2/e/ed54d7c021f906f22e29bc9f \n 41:\xa0 https://cad.onshape.com/documents/9c2b8f04b2e364fd11a36810/w/53d281eca7eb7112629e8a94/e/a9516622ab60fed62fd68399 \n 40:\xa0 https://cad.onshape.com/documents/6246232c4378185e56d54c6e/w/3769bf309a6e354eb6d6f4b8/e/0b415c11caa8e32b0ede8adb \n 39:\xa0 https://cad.onshape.com/documents/024e00c1b9d8b354eb465b48/w/cb2e52ffc785dd58fe3c763e/e/5ff4f2d44699c5e563ce0979 \n 38:\xa0 https://cad.onshape.com/documents/1667ec24dc305438e4c27dd0/w/1cd2af58e703a02347d7a74b/e/67925f371e7374c9c8fc5add \n 37:\xa0 https://cad.onshape.com/documents/b0164f1f6ff756e3427b6387/w/f6b09de1b8d1d78b364e63eb/e/4bcd0fb624ff69bf11efd1d4 \n 36:\xa0 https://cad.onshape.com/documents/7b2c3fb25c6bed2c029ac3f7/w/61ba7b7911df922c574a328b/e/cb427d68482112b66354e191 \n 35:\xa0 https://cad.onshape.com/documents/d9e62a8261ea95fd87b5c395/w/45117985ba659fb20e9b4504/e/2d7fa2867cafeb174fffec89 \n 34:\xa0 https://cad.onshape.com/documents/6fc4e411f4bde0f4c7855edf/w/52bf8abd669d03f113870180/e/1e8eecddab11e1717045fb28 \n 33:\xa0 https://cad.onshape.com/documents/40b4090f1edc6a3b52d743df/w/7ccb90729f7ee8d1182f5915/e/c29ff35d579fcdbdc8df911d \n 32:\xa0 https://cad.onshape.com/documents/9baf95455f145ca41d6b0adf/w/86ca729f2eef7860cb5a0ac8/e/4c81a61ed7a1f20491f0930a \n 31:\xa0 https://cad.onshape.com/documents/253a8ebf57e1ba18b165438a/w/d2aef0df7c01dacd0d510728/e/7f0f18a600e08e5e58f4a199 \n 30:\xa0 https://cad.onshape.com/documents/fbef25d8f52b6e7a41ceb813/w/03051ea74ae8e12d88ac80c4/e/282deaac643247b32db53204 \n 29:\xa0 https://cad.onshape.com/documents/9d9e234e17250553abade4bd/w/7b46aa00fa23b2a53ba3f48a/e/25f7e20dc18e2eb7e4b6f988 \n 28:\xa0 https://cad.onshape.com/documents/61ece78e5f96c2b244fc521d/w/79a9117ca052e3551e2c381f/e/ef35d77bbac0b2e94dc32e2f \n 27:\xa0 https://cad.onshape.com/documents/e3299a610dbc103fe744c9f8/w/571bac8630f42cfef8ef1376/e/0a4f09405881155d55a8bccb \n 26:\xa0 https://cad.onshape.com/documents/610af0e1bf929a29dc6b7165/w/b0b2ce47b1e498cce82dcb36/e/52cc00a071f718aec522fab2 \n 25:\xa0 https://cad.onshape.com/documents/3f82deb900d5c49c79eb0c45/w/f82e26f34cc993ff9f78b4a8/e/d266f4e47cb4e7b0e4784e5a \n 24:\xa0 https://cad.onshape.com/documents/a853cf877b2be8d186ca413a/w/b4f7a0039bd29604d6b83760/e/2e4392410e30fa03c7dcb504 \n 23:\xa0 https://cad.onshape.com/documents/054830bdeecfbad365cf0ed3/w/5c2a5735a7fc4cc395dc72c7/e/21b234c1aef7a417a4f2096e \n 22:\xa0 https://cad.onshape.com/documents/a25c6deb43b49fd406cbc30a/w/5184db529a484826f46ab77a/e/113277cd5033b29580a9fe14 \n 21: https://cad.onshape.com/documents/555c037e4c544d7e41cd9c4a/w/2f514d0e3eedf626edd256ab/e/9ed2220f5b862201a11a2e2f \n 20:\xa0 https://cad.onshape.com/documents/00d2d3d97d8e2a206c9a5d52/w/e46284bfca1e3292d0cb2597/e/c845f1635fff1fb529555f85 \n 19:\xa0 https://cad.onshape.com/documents/79c8735713517a666398e1dc/w/09063694be7ae50f98622e92/e/3ae879d78bc33ce1554a4fab \n 18:\xa0 https://cad.onshape.com/documents/e4292e7fbdc173a0142e1f6e/w/49f0be6d4a5068dbd0c7b4cd/e/19f82b0fddd8d45fb2a7a84a \n 17:\xa0 https://cad.onshape.com/documents/2880615de3aa83f2575b73d9/w/fd67727de5804b41a62e1de6/e/aa9f6607b9e2990350ac7259 \n 16:\xa0 https://cad.onshape.com/documents/040cb15a9c14b3cab4cdeed7/w/e642934dabf3c29fb7877d5c/e/55150bfbb39eb2edd64eacfa \n 15:\xa0 https://cad.onshape.com/documents/e53efa704eff5d0020ee71f1/w/69e2afd9e5a823bb2766a56b/e/6e67ea4bae772adbdccefced \n 14:\xa0 https://cad.onshape.com/documents/ed7e3bbaa41ae533b48821c4/w/44d10e98d32c4460bc8ec4f3/e/52cada95082d683800b3f148 \n 13:\xa0 https://cad.onshape.com/documents/0196f66e1e590026e158d1fb/w/3ff2b90488ff97afa7223d59/e/912511ff7758529c25f4b7c7 \n 12:\xa0 https://cad.onshape.com/documents/e8544e16447cc754e85993a1/w/3133d1766d88eb7e8e9622fd/e/6bd09d4acf445293e18fc06b \n 11:\xa0 https://cad.onshape.com/documents/01c01046d0ba94e5a46783fe/w/1c383715fd425c1f7e1fc76d/e/4aeafa421a74733e6e9bfcd4 \n 10:\xa0 https://cad.onshape.com/documents/7652f9fa95dfade8025ab9f8/w/96821dd07334a52ef4008a92/e/089185fd419e75a32c777de6 \n 9:\xa0 https://cad.onshape.com/documents/1ce8d03bee3455ebe5f83dbb/w/4a077a35638ac4b9846ef1c5/e/af8832461f5f34c1eedf8647 \n 8:\xa0 https://cad.onshape.com/documents/f7638652e696877ddde3e093/w/22917675be9c29322cab8abc/e/22312455688759b10a91f5b1 \n 7:\xa0 https://cad.onshape.com/documents/222bd9ec7d5c606a84f57e84/w/2af66e3cf752bef60f745a31/e/054e599a9b99ebb8c77bf189 \n 6:\xa0 https://cad.onshape.com/documents/9e099d4acca1fc1c4505859a/w/6d820209c9f5076e0283a99d/e/75b1c75d868c174001432e94 \n 5:\xa0 https://cad.onshape.com/documents/7aeaa47572b66713be252d11/w/677942979611e9f3bc6d2828/e/23ca7df05a3f169f90e40e7e \n 4:\xa0 https://cad.onshape.com/documents/863c303047325ce19065de0d/w/10279bfa45c0ccecac9df490/e/2bd6bd693af4b67204dda24c \n 3:\xa0 https://cad.onshape.com/documents/baaebc06be2e04d5ced92b12/w/1c72706e634eec702872bcfd/e/c9d2a2221ff7a4b3b26264ff \n 2:\xa0 https://cad.onshape.com/documents/23ba44a67d8d40c102be8182/w/f32c79a71d0bc6f72074e5f5/e/cd7b3c975062f69e889cd935 \n 1:\xa0 https://cad.onshape.com/documents/f1eac240036797d4ecfc68f3/w/73da17a9d9f7154142f0d1b8/e/74992aaad36c0855d90bd1a7 \n 體積: \n \n', 'tags': '', 'url': 'W1 HW.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W2 HW', 'text': 'Exercise 1-1 \n \n Exercise 1-2 \n \n Exercise 1-3 \n \n Exercise 1-4 \n \n Exercise 2-1 \n \n Exercise 2-2 \n \n Exercise 2-3 \n \n Exercise 2-4 \n', 'tags': '', 'url': 'W2 HW.html'}]};