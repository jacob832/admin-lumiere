import React, { useState } from 'react';

export default function CommunitySettings() {
  const [communityEnabled, setCommunityEnabled] = useState(true);
  const [accessCommunity, setAccessCommunity] = useState('logged');
  const [courseDiscussionEnabled, setCourseDiscussionEnabled] = useState(true);
  const [permissions, setPermissions] = useState({ post: true, poll: true, comment: true });
  const [reactions, setReactions] = useState({ upvote: true, like: true, share: true });
  const [attachments, setAttachments] = useState({ image: true, video: true, file: true });
  const [discussionAccess, setDiscussionAccess] = useState('both');
  const [discussionLevel, setDiscussionLevel] = useState('different');
  const [inboxOption, setInboxOption] = useState('anyone');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveSettings = () => {
    setLoading(true);
    setTimeout(() => {
      setSaved(true);
      setLoading(false);
      setTimeout(() => setSaved(false), 2000);
    }, 1000);
  };

  const resetSettings = () => {
    setCommunityEnabled(true);
    setAccessCommunity('logged');
    setCourseDiscussionEnabled(true);
    setPermissions({ post: true, poll: true, comment: true });
    setReactions({ upvote: true, like: true, share: true });
    setAttachments({ image: true, video: true, file: true });
    setDiscussionAccess('both');
    setDiscussionLevel('different');
    setInboxOption('anyone');
  };

  const sectionStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    background: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    borderLeft: '4px solid #f57c00'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
  };

  const descStyle = {
    fontSize: '13px',
    color: '#666',
    marginBottom: '10px',
    display: 'block',
  };

  const toggleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const radioGroupStyle = { marginBottom: '12px' };

  const sectionTitle = (emoji, text) => (
    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{emoji} {text}</h3>
  );

  return (
    <div className="page-wrapper">
      <div className="content container-fluid" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Community access</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Set the community and course discussion access and level, and decide on inbox communication options.</p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button onClick={saveSettings} disabled={loading} style={{
            backgroundColor: '#f57c00',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            {loading ? 'Saving...' : 'Save'}
          </button>
          <button onClick={resetSettings} style={{
            backgroundColor: '#e0e0e0',
            color: '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Reset
          </button>
        </div>

        {saved && <div style={{ color: '#388e3c', marginBottom: '20px', fontWeight: 'bold' }}>✅ Settings saved successfully!</div>}

        <div style={sectionStyle}>
          {sectionTitle('🧑‍🤝‍🧑', 'Enable Community')}
          <div style={toggleStyle}>
            <label style={labelStyle}>Enable Community</label>
            <input type="checkbox" checked={communityEnabled} onChange={() => setCommunityEnabled(!communityEnabled)} />
          </div>
          <span style={descStyle}>Allow members to participate in a dedicated community space.</span>
          <p>Let your learners discuss, share advice, and connect in a private group area.</p>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Access Community</label>
            <span style={descStyle}>Choose who can access the community features.</span>
            <label><input type="radio" value="logged" checked={accessCommunity === 'logged'} onChange={() => setAccessCommunity('logged')} /> Logged in users</label><br />
            <label><input type="radio" value="paying" checked={accessCommunity === 'paying'} onChange={() => setAccessCommunity('paying')} /> Only paying users</label>
          </div>
        </div>

        <div style={sectionStyle}>
          {sectionTitle('💬', 'Course Discussions')}
          <div style={toggleStyle}>
            <label style={labelStyle}>Enable Course discussions</label>
            <input type="checkbox" checked={courseDiscussionEnabled} onChange={() => setCourseDiscussionEnabled(!courseDiscussionEnabled)} />
          </div>
          <span style={descStyle}>Activates discussion boards for each course.</span>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Permissions</label>
            <span style={descStyle}>Control what members are allowed to do in discussions.</span>
            <label><input type="checkbox" checked={permissions.post} onChange={() => setPermissions({ ...permissions, post: !permissions.post })} /> Post</label><br />
            <label><input type="checkbox" checked={permissions.poll} onChange={() => setPermissions({ ...permissions, poll: !permissions.poll })} /> Poll</label><br />
            <label><input type="checkbox" checked={permissions.comment} onChange={() => setPermissions({ ...permissions, comment: !permissions.comment })} /> Comment</label>
          </div>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Reactions</label>
            <span style={descStyle}>Enable users to upvote, like, or share posts.</span>
            <label><input type="checkbox" checked={reactions.upvote} onChange={() => setReactions({ ...reactions, upvote: !reactions.upvote })} /> Upvote</label><br />
            <label><input type="checkbox" checked={reactions.like} onChange={() => setReactions({ ...reactions, like: !reactions.like })} /> Like</label><br />
            <label><input type="checkbox" checked={reactions.share} onChange={() => setReactions({ ...reactions, share: !reactions.share })} /> Share</label>
          </div>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Attachments</label>
            <span style={descStyle}>Allow users to attach files to their posts.</span>
            <label><input type="checkbox" checked={attachments.image} onChange={() => setAttachments({ ...attachments, image: !attachments.image })} /> Images</label><br />
            <label><input type="checkbox" checked={attachments.video} onChange={() => setAttachments({ ...attachments, video: !attachments.video })} /> Videos</label><br />
            <label><input type="checkbox" checked={attachments.file} onChange={() => setAttachments({ ...attachments, file: !attachments.file })} /> Files</label>
          </div>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Access Course Discussions</label>
            <span style={descStyle}>Decide where users access discussions.</span>
            <label><input type="radio" value="both" checked={discussionAccess === 'both'} onChange={() => setDiscussionAccess('both')} /> Course player and community</label><br />
            <label><input type="radio" value="player" checked={discussionAccess === 'player'} onChange={() => setDiscussionAccess('player')} /> Only course player</label>
          </div>

          <div style={radioGroupStyle}>
            <label style={labelStyle}>Course discussion level</label>
            <span style={descStyle}>Choose if each activity has its own thread or one shared.</span>
            <label><input type="radio" value="different" checked={discussionLevel === 'different'} onChange={() => setDiscussionLevel('different')} /> Separate for each activity</label><br />
            <label><input type="radio" value="common" checked={discussionLevel === 'common'} onChange={() => setDiscussionLevel('common')} /> One for entire course</label>
          </div>
        </div>

        <div style={sectionStyle}>
          {sectionTitle('📬', 'Inbox')}
          <label style={labelStyle}>Inbox Communication</label>
          <span style={descStyle}>Set how learners message others.</span>
          <p>Control private messaging through your platform’s inbox.</p>
          <label><input type="radio" value="anyone" checked={inboxOption === 'anyone'} onChange={() => setInboxOption('anyone')} /> Learners can message anyone</label><br />
          <label><input type="radio" value="admin" checked={inboxOption === 'admin'} onChange={() => setInboxOption('admin')} /> Learners can only message admins</label><br />
          <label><input type="radio" value="none" checked={inboxOption === 'none'} onChange={() => setInboxOption('none')} /> No inbox access at all</label>
        </div>
      </div>
    </div>
  );
}
