export const runtime = 'edge';
import { Metadata } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import styles from '../../styles/terms.module.css'

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'This Cookie Policy applies to the services and content provided by Zisty. Please review it.',
}

export default function cookiePage() {
    return (
        <>
            <main>
                <div className={styles.contents}>
                    <div className={styles.title}>
                        <p>2024/12/22</p>
                        <h1>Cookie Policy</h1>
                    </div>
                    <div className={styles.content}>
                        <h1>まず初めに</h1>
                        <p>こういうｺﾞﾁｬｺﾞﾁｬしてて読みたくないのは我々も同じです。ですがこれがないと平和なコミュニティはできません。ご理解をよろしくお願いします。</p>
                        <p>Zistyのアカウントの作成や利用、Zistyが運営しているサービスの利用する際には本規約に同意したものとみなされます。注意深くお読みいただき、ご理解頂いた上でご利用ください。もし、本規約に同意いただけない場合は、サービスの利用をお控えください。</p>

                        <h1>Cookieとは</h1>
                        <p>Cookieはウェブサイトがユーザーのブラウザに保存する小さなデータファイルのことです。これにより、ユーザーのセッション情報などを保存したり、ユーザーの行動を分析したりすることが可能になります。</p>

                        <h1>Cookieを使用する目的</h1>
                        <p>ZistyはCookieを使用してユーザーのセッション情報を保存するのに使用しています。これにより、ユーザーはアクセス時に毎度ログインする手間がなく、自動でログインすることができます。</p>

                        <h1>Cookieの管理</h1>
                        <p>Cookieはブラウザの設定を変更することで無効にしたり、削除したりすることができます。しかし、Cookieの削除や無効を行うと、一部の機能が利用できなくなることがあります。</p>

                        <h1>サードパーティー</h1>
                        <p>Zistyは分析ツールなどによって発行されたサードパーティーのCookieを使用する場合があります。これにより、第三者が提供するサービスを活用し、サービスの改善や改良などを行うことができます。</p>

                        <h1>規約について</h1>
                        <h2>本規約の変更</h2>
                        <p>Zistyは本規約を予告なく変更できる権利を有します。変更後の規約はZistyに提示した時点から効力を発生します。引き続きZistyが提供するサービスなどを利用することで、変更に同意したものとみなされます。また利用規約の変更はSNSやBlogを通してお知らせすることもあります。</p>

                        <h2>連絡先</h2>
                        <p>本規約に関するお問い合わせは以下の連絡先までご連絡ください。<br />
                            <b>info@zisty.net</b></p>

                        <h1></h1>
                        <p>以上が、Zistyの本規約です。本規約は予告なく変更される場合がありますのでご注意ください。</p>
                    </div>
                </div>
            </main>
        </>
    )
}