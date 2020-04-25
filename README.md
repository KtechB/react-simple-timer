# react simple timer 
こちらを参考にさせていただきました
https://snamiki1212.com/create-pomotimer-with-hooks

# useEffectのメモ

第2引数を指定なし=> Render毎に第１引数の関数を実行。
第2引数に[]を指定 => マウント時とアンマウント時に第１引数の関数を実行。
第2引数に値の配列を指定 => マウント時と指定された値に変化があった場合のみに第１引数の関数を実行。
