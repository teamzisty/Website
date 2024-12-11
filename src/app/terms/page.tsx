import { Metadata } from 'next'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import styles from '../styles/terms.module.css'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'These Terms of Use apply to the services and content provided by Zisty. Please review them.',
}

export default function termsPage() {
    return (
        <>
            <main>
                <div className={styles.contents}>
                    <div className={styles.title}>
                        <p>2024/12/11</p>
                        <h1>Terms of Service</h1>
                    </div>
                    <div className={styles.content}>
                        <h1>まず初めに</h1>
                        <p>こういうｺﾞﾁｬｺﾞﾁｬしてて読みたくないのは我々も同じです。ですがこれがないと平和なコミュニティはできません。ご理解をよろしくお願いします。</p>
                        <p>Zistyのアカウントの作成や利用、Zistyが運営しているサービスの利用する際には本規約に同意したものとみなされます。注意深くお読みいただき、ご理解頂いた上でご利用ください。もし、本規約に同意いただけない場合は、サービスの利用をお控えください。</p>


                        <h1>ユーザーがZistyへ</h1>
                        <h2>サービスの提供</h2>
                        <p>Zistyはアプリやサイト、プラットフォームなどこれらのサービスを開発、提供します。またアカウントを作成、管理をすることができ、連携サービスという機能を使用し、Zistyの製品を簡単に使用することができるようにします。</p>

                        <h2>Zistyがユーザーへ</h2>
                        <h2>他者の尊重</h2>
                        <p>Zistyは全てのユーザーへお互いを尊重し合えるようなコミュニティ作りを目指しています。適用される法律の尊重やプライバシーに関する権利や知的財産権などの他者の権利を尊重、他者または自分自身に被害をもたらす行為やこうした行為をほのめかす脅迫またはこうした行為の助長を行わないことを大切にしてください。</p>

                        <h2>不正使用の禁止</h2>
                        <p>Zistyはユーザーへ便利なサービスやツールの提供、開発を行っています。しかし、一部はルールを守らず、ユーザーを尊重しないユーザーもいます。
                            Zistyのサービスまたはシステムを不正に使用する、妨害する、破壊する、サービスまたはシステムに損害を与えることをしてはいけません。</p>

                        <h2>年齢要件および親・法定保護者の責任</h2>
                        <p>Zistyのサービスを利用できる年齢はユーザーが13歳以上であり、自国の法律が義務付ける最低年齢要件を満たしていることを確認したものとします。ユーザーがお住まいの国でZistyのサービスをご利用いただける年齢に達しているものの、Zistyの規約に同意する権限を有さない年齢である場合は、ユーザーの親権者もしくは保護者がユーザーに代わって規約に同意する必要があります。
                            これらの規約を一緒に一読するよう、親権者または保護者に依頼してください。ユーザーが親権者または法定保護者であり、お子様（自国での最低年齢に達している必要があります）にサービスの使用を許可する場合、これら規約はユーザーにも適用され、ユーザーはサービスでのユーザーのお子様の行動に責任を持ちます。</p>


                        <h1>サービスの使用</h1>
                        <h2>Zistyのアカウント</h2>
                        <p>Zisty Accountsのアカウントは連携できるサービスのログインや管理、プロフィールの編集、アカウントの削除、メールアドレスの追加と変更、パスワードの変更、全デバイスからのログアウト要求、二段階認証の設定、ログイン中のデバイスの管理などを行える権利があります。</p>
                        <p>ユーザーは、自分のアカウントの安全性に責任を持ち、自分のアカウントに問題があると考える場合、即座にZistyに通知することに同意します。パスワードを使用する場合は、パスワードは強固である必要があり、二要素認証を有効にすることを強く推奨します。</p>
                        <p>ユーザーがアカウントにログインできなくなった場合、Zistyに登録しているメールアドレスへ認証URLを送信し、パスワードをリセットすることができます。二段階認証の認証コードに何らかの問題で確認できない場合はRecovery Codeを使用してアカウントにログインすることができます。</p>
                        <p>ユーザーは、Zistyによる事前の書面による同意なしに、ユーザーのアカウント、ユーザー名、バニティURL、その他の一意の識別子のライセンスを許諾、販売、貸与、または譲渡しないことに同意するものとします。またユーザーのユーザー名、URL、その他の識別子の削除、変更、返還要求をする権利を留保するものとします。</p>

                        <h2>サービスとの連携</h2>
                        <p>Zisty Accountsではアカウントとサービスを連携できる機能があります。それを使用することによって連携可能なサービス（チームで開発されたサービスやメンバーが開発したサービス）に簡単にログインすることを可能にします。
                            これは連携時にアカウントの情報（名前、メールアドレス、アイコン画像、アカウントの開設日）にアクセス可能なキーを生成することで実現しています。
                            規約は連携先のサービスによる規約が最優先に適応されます。</p>

                        <h1>サービスのコンテンツ</h1>
                        <h2>ユーザーのコンテンツ</h2>
                        <p>これらの規約において、「ユーザーのコンテンツ」は、ユーザーがZistyのサービスにアップロード（追加、投稿、共有、配信等）したものすべてを指します。これには、テキスト、リンク、写真、動画、ドキュメントその他のメディアを含みます。</p>
                        <p>ユーザーには、サービスにコンテンツを追加する義務は一切ありません。ユーザーがサービスにコンテンツを追加することを選択した場合、ユーザーには、その権利があること、これら規約のこのセクションにおけるライセンスを付与する権利があること、ユーザーのコンテンツが合法であることを確認する責任があります。
                            Zistyは、あらゆるユーザーのコンテンツに対し責任を負わず、またZistyは他者によるユーザーのコンテンツの使用に対し責任を負いません。</p>
                        <p>ユーザーのコンテンツはユーザーのものですが、ユーザーはZistyを使用するにあたり、Zistyにそのコンテンツの権利を付与します。
                            ユーザーのコンテンツは所定の知的財産権により保護されていることがあります。しかし、Zistyのサービスをご利用いただくことにより、ユーザーはZistyに、Zistyのサービスの運用、開発、および改善に関連して、適用される法的要件に従い、ユーザーのコンテンツで以下のことを行うライセンス（許可の一種）を与えるものとします。</p>
                        <ul>
                            <li>サービスの利用に合わせて、ユーザーのコンテンツを使用、コピー、保存、配布、および伝達する。</li>
                            <li>コンテンツを他者が見られるようにすることを選択した場合、ユーザーのコンテンツを公開、公的に行う、または公的に展示すること</li>
                            <li>ユーザーのコンテンツを監視、変更、翻訳、再フォーマットする</li>
                            <li>ユーザーのコンテンツを再許諾して、Zistyのサービスが意図したとおりに機能するようにする</li>
                        </ul>
                        <p>このライセンスは、世界共通の非独占的、ロイヤリティフリー、譲渡可能で、かつ永久的なものです</p>
                        <p>これら規約、ポリシーまたは適用される法律または規制に違反するものである場合、または継続的に利用可能であることでZistyに対しリスクを発生させるまたは他のユーザーの体験または利益に対し悪影響を与えるものである場合、Zistyはユーザーのコンテンツをブロック、削除、および/または恒久的に削除する権利を保持します。</p>

                        <h2>Zistyのコンテンツ</h2>
                        <p>Zistyのサービスには、Zistyのアプリやウェブサイトのデザイン、アートや画像、Zistyによって書かれたコンテンツなど、Zistyに属するコンテンツが含まれることがあります。ユーザーは、これらの規約内で概説されている通りに弊社のソフトウェアを使用できます。</p>

                        <h1>ユーザー・Zisty</h1>
                        <h2>終了</h2>
                        <p><b>ユーザーの解約権</b>：ユーザーはいつでも、いかなる理由においても、Zistyが提供するサービスの利用を自由に終了することができます。これはアカウントを削除し、サービスの利用を終了した場合に解約となります。</p>
                        <p><b>Zistyの終了の権利</b>：適用法に基づき、Zistyは、Zistyの判断において、理由を問わず、事前通知の有無にかかわらず、ユーザーのアカウントを終了する、ならびに／またはZistyのサービスの一部もしくはすべてへのアクセスを制限する権利を留保します。</p>
                        <ul>
                            <li>ユーザーがこれらの規約、Zistyのガイドラインやその他ポリシー、または特定のプロダクトに適用されるその他の規約に違反した場合。</li>
                            <li>法律上の要件または裁判所命令を遵守するために必要な場合。</li>
                            <li>Zistyが、ユーザー、Zisty、その他のユーザー、またはサードパーティへの損害を防ぐために、終了が必要であると合理的に考える場合。</li>
                            <li>アカウントが2年以上休止している場合。</li>
                        </ul>

                        <h2>異議申し立て</h2>
                        <p>Zistyは透明性を重視し、Zistyの判断のコンテキストをお客様に伝えるべく努力しています。ユーザーは、フォームまたは利用可能なサービス内オプションから、これら規約のもとZistyが行う執行措置に対し申し立てができます。これには、終了、停止、コンテンツの削除を含みます。</p>

                        <h1>賠償責任</h1>
                        <p>個人の能力ではなく、企業または法人に代わりサービスを利用する場合、ユーザーは、いかなる請求、法的責任、損害および費用（妥当な法的費用および会計費用を含みます）からもZistyおよびその役員、取締役、従業員、および代理人を補償し、損害を与えないものとします。</p>

                        <h1>責任の制限</h1>
                        <p>Zistyはそれが違法となり得る場合、ユーザーに対する責任を除外または制限しません。Zistyはユーザーに対し、弊社による合理的な注意、技術の使用、またはZistyとユーザーの間の重大な契約違反における過失による合理的に予見できる結果による損失および損害に対しても責任は負わないものとします。</p>
                        <p>サービスで提示されている情報、またはサービスを通じて提供される情報は、情報提供のみを目的としています。Zistyは、情報が正確で、完全で、有用であることを確認しません。ユーザーはご自分の責任のみでこのような情報に依存するものとします</p>
                        <p>Zistyは、サービスにかかわるユーザーの行為またはコンテンツについて賠償責任を負いません。</p>

                        
                        <h1>規約について</h1>
                        <h2>免責事項</h2>
                        <p>Zistyはサービスの提供について細心の注意を払っていますが、情報の正確性、安全性、完全性、有用性、適切性について一切の保証をしません。利用者は当サービスを利用することによって生じたいかなる損害についても当サービスは一切の責任を負いません</p>

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